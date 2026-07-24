from flask import Flask, render_template, request, redirect, flash, url_for, session, jsonify
import sqlite3
import logging
import os
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

# Database path configuration (use /tmp/database.db in Vercel's read-only filesystem)
DB_PATH = '/tmp/database.db' if os.environ.get('VERCEL') else 'database.db'

# Database initialization
def init_db():
    with sqlite3.connect(DB_PATH) as conn:
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

        with sqlite3.connect(DB_PATH) as conn:
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

        with sqlite3.connect(DB_PATH) as conn:
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
        
    dep_code = departure.upper().strip()
    arr_code = destination.upper().strip()
    
    # Absolute stable flight numbers using hash
    pk_num = abs(hash(dep_code + arr_code + "PIA")) % 900 + 100
    ek_num = abs(hash(dep_code + arr_code + "EK")) % 900 + 100
    fz_num = abs(hash(dep_code + arr_code + "FZ")) % 900 + 100
    
    mock_flights = [
        {
            'flight': {'iata': f'PK-{pk_num}'},
            'airline': {'name': 'Pakistan International Airlines'},
            'flight_status': 'active',
            'departure': {
                'iata': dep_code,
                'airport': f'{dep_code} International Airport',
                'scheduled': '2026-05-24T18:00:00+00:00',
                'estimated': '2026-05-24T18:15:00+00:00',
                'delay': 15,
                'terminal': '1',
                'gate': 'A5'
            },
            'arrival': {
                'iata': arr_code,
                'airport': f'{arr_code} International Airport',
                'scheduled': '2026-05-24T20:15:00+00:00',
                'estimated': '2026-05-24T20:30:00+00:00',
                'delay': 15,
                'terminal': '3',
                'gate': 'B12'
            }
        },
        {
            'flight': {'iata': f'EK-{ek_num}'},
            'airline': {'name': 'Emirates'},
            'flight_status': 'scheduled',
            'departure': {
                'iata': dep_code,
                'airport': f'{dep_code} International Airport',
                'scheduled': '2026-05-24T22:30:00+00:00',
                'estimated': None,
                'delay': None,
                'terminal': '2',
                'gate': 'C10'
            },
            'arrival': {
                'iata': arr_code,
                'airport': f'{arr_code} International Airport',
                'scheduled': '2026-05-25T00:45:00+00:00',
                'estimated': None,
                'delay': None,
                'terminal': '3',
                'gate': 'C22'
            }
        },
        {
            'flight': {'iata': f'FZ-{fz_num}'},
            'airline': {'name': 'flydubai'},
            'flight_status': 'scheduled',
            'departure': {
                'iata': dep_code,
                'airport': f'{dep_code} International Airport',
                'scheduled': '2026-05-25T02:15:00+00:00',
                'estimated': None,
                'delay': None,
                'terminal': '1',
                'gate': 'B8'
            },
            'arrival': {
                'iata': arr_code,
                'airport': f'{arr_code} International Airport',
                'scheduled': '2026-05-25T04:30:00+00:00',
                'estimated': None,
                'delay': None,
                'terminal': '2',
                'gate': 'A18'
            }
        }
    ]
    
    return jsonify({
        'status': 200,
        'api_response': {
            'data': mock_flights
        }
    })

if __name__ == '__main__':
    # Enable debug mode for detailed error messages
    app.run(debug=True, host='127.0.0.1', port=8080)
