from flask import Flask, render_template, request, redirect, flash, url_for, session
import sqlite3

app = Flask(__name__)
app.secret_key = 'your_secret_key'


# Initialize database
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

# Route for home
@app.route('/')
def home():
    return render_template('base.html')

# Route for about
@app.route('/about')
def about():
    return render_template('about.html')
    
    # Route for explore
@app.route('/explore')
def explore():
    return render_template('explore.html')

    # Route for search
@app.route('/search')
def search():
    return render_template('search.html')



# Login route
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

# Register route
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

# Dashboard route
@app.route('/dashboard')
def dashboard():
    if 'username' in session:
        return redirect(url_for('home'))  # Redirect to home page when logged in
    return redirect(url_for('login'))  # Redirect to login page if not logged in


@app.route('/logout')
def logout():
    session.pop('username', None)  # Remove the username from the session
    return redirect(url_for('login'))  # Redirect to login page after logout


if __name__ == '__main__':
    app.run(debug=True)
