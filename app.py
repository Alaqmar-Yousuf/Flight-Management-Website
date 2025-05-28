from flask import Flask, render_template, request, redirect, flash, url_for, session, jsonify
import sqlite3
import requests
import os
import math
import logging
import traceback
from datetime import datetime
from flask_caching import Cache
from dotenv import load_dotenv

# Configure logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
app.secret_key = 'your_secret_key_here'

# Enable debug mode and template auto-reload
app.config['DEBUG'] = True
app.config['TEMPLATES_AUTO_RELOAD'] = True

# Cache configuration
cache = Cache(app, config={
    'CACHE_TYPE': 'simple',
    'CACHE_DEFAULT_TIMEOUT': 300  # Cache for 5 minutes
})

# Aviation Stack API configuration
AVIATION_STACK_API_KEY = 'cdceb61cfcaf3f5ae2e0d41062276e89'
AVIATION_STACK_BASE_URL = 'http://api.aviationstack.com/v1'
API_TIMEOUT = 30

# Test endpoint to verify API
@app.route('/test_api')
def test_api():
    """Test endpoint to verify API connectivity"""
    try:
        logger.debug("Making test API request")
        response = requests.get(
            f'{AVIATION_STACK_BASE_URL}/flights',
            params={
                'access_key': AVIATION_STACK_API_KEY,
                'limit': 1
            },
            timeout=API_TIMEOUT
        )
        logger.debug(f"API Response Status: {response.status_code}")
        logger.debug(f"API Response Headers: {dict(response.headers)}")
        logger.debug(f"API Response Content: {response.text[:500]}...")
        
        return jsonify({
            'status': response.status_code,
            'headers': dict(response.headers),
            'content': response.json()
        })
    except Exception as e:
        logger.error(f"Test API Error: {str(e)}")
        logger.error(traceback.format_exc())
        return jsonify({
            'error': str(e),
            'traceback': traceback.format_exc()
        }), 500

# Database initialization
def init_db():
    with sqlite3.connect('database.db') as conn:
        cursor = conn.cursor()
        cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )''')
        conn.commit()

init_db()

# Route handlers
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/explore')
def explore():
    return render_template('explore.html')

@app.route('/search')
def search():
    return render_template('search.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        with sqlite3.connect('database.db') as conn:
            cursor = conn.cursor()
            cursor.execute('SELECT * FROM users WHERE username = ? AND password = ?', (username, password))
            user = cursor.fetchone()

        if user:
            session['username'] = username
            flash('Login successful!', 'success')
            return redirect(url_for('dashboard'))
        else:
            flash('Invalid credentials.', 'danger')
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        with sqlite3.connect('database.db') as conn:
            cursor = conn.cursor()
            try:
                cursor.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, password))
                conn.commit()
                flash('Registration successful! Please log in.', 'success')
                return redirect(url_for('login'))
            except sqlite3.IntegrityError:
                flash('Username already exists.', 'danger')

    return render_template('register.html')

@app.route('/dashboard')
def dashboard():
    if 'username' in session:
        return redirect(url_for('home'))
    return redirect(url_for('login'))

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('login'))

# API routes
@app.route('/api/flights', methods=['GET'])
def get_flights():
    departure = request.args.get('departure')
    destination = request.args.get('destination')
    
    logger.debug(f"Received request for flights from {departure} to {destination}")
    
    if not departure or not destination:
        return jsonify({'error': 'Both departure and destination are required'}), 400
    
    try:
        params = {
            'access_key': AVIATION_STACK_API_KEY,
            'dep_iata': departure.upper(),
            'arr_iata': destination.upper(),
            'limit': 10
        }
        
        logger.debug(f"Making API request with params: {params}")
        
        response = requests.get(
            f'{AVIATION_STACK_BASE_URL}/flights',
            params=params,
            timeout=API_TIMEOUT
        )
        
        logger.debug(f"API Response Status: {response.status_code}")
        logger.debug(f"API Response Headers: {dict(response.headers)}")
        logger.debug(f"API Response Content: {response.text[:500]}...")
        
        response_data = response.json()
        
        if response.status_code != 200:
            error_message = response_data.get('error', {}).get('message', 'Unknown error occurred')
            logger.error(f"API Error: {error_message}")
            return jsonify({'error': error_message}), response.status_code
            
        if 'error' in response_data:
            error_code = response_data['error'].get('code')
            error_message = response_data['error'].get('message', 'Unknown error occurred')
            logger.error(f"API Error: {error_code} - {error_message}")
            
            if error_code == 'usage_limit_reached':
                return jsonify({'error': 'Monthly API quota exceeded'}), 429
            elif error_code == 'invalid_access_key':
                return jsonify({'error': 'Invalid API key'}), 401
            else:
                return jsonify({'error': error_message}), 400
        
        return jsonify({
            'status': response.status_code,
            'api_response': response_data
        })
        
    except requests.exceptions.Timeout:
        logger.error("API request timed out")
        return jsonify({'error': 'Request timed out. Please try again.'}), 504
    except requests.exceptions.RequestException as e:
        logger.error(f"API request failed: {str(e)}")
        logger.error(traceback.format_exc())
        return jsonify({
            'error': 'Failed to fetch flight data',
            'details': str(e)
        }), 500
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        logger.error(traceback.format_exc())
        return jsonify({
            'error': 'An unexpected error occurred',
            'details': str(e)
        }), 500

# Helper functions
def calculate_price(flight):
    try:
        base_price = 100
        
        # Distance-based pricing
        dep_lat = float(flight.get('departure', {}).get('latitude', 0))
        dep_lon = float(flight.get('departure', {}).get('longitude', 0))
        arr_lat = float(flight.get('arrival', {}).get('latitude', 0))
        arr_lon = float(flight.get('arrival', {}).get('longitude', 0))
        
        distance = calculate_distance(dep_lat, dep_lon, arr_lat, arr_lon)
        distance_factor = math.sqrt(distance) * 0.1
        
        # Time of day pricing
        departure_time = datetime.fromisoformat(flight.get('departure', {}).get('scheduled', '').replace('Z', '+00:00'))
        time_factor = 1.0
        if 6 <= departure_time.hour <= 9:  # Morning rush
            time_factor = 1.3
        elif 16 <= departure_time.hour <= 19:  # Evening rush
            time_factor = 1.2
        
        # Season pricing
        month = departure_time.month
        season_factor = 1.0
        if month in [6, 7, 8]:  # Summer
            season_factor = 1.2
        elif month in [12, 1]:  # Holiday season
            season_factor = 1.3
        
        price = (base_price + distance_factor) * time_factor * season_factor
        return round(price / 10) * 10
        
    except Exception as e:
        app.logger.error(f"Price calculation error: {str(e)}")
        return 500

def calculate_distance(lat1, lon1, lat2, lon2):
    R = 6371  # Earth's radius in kilometers
    lat1, lon1, lat2, lon2 = map(math.radians, [lat1, lon1, lat2, lon2])
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    a = math.sin(dlat/2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon/2)**2
    c = 2 * math.asin(math.sqrt(a))
    return R * c

if __name__ == '__main__':
    # Enable debug mode for detailed error messages
    app.run(debug=True, host='127.0.0.1', port=8080)
