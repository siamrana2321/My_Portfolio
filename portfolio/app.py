from flask import Flask, render_template
from flask_frozen import Freezer
import os

app = Flask(__name__)
freezer = Freezer(app)

@app.route('/')
def home():
    return render_template('index.html', title='Home')

@app.route('/about')
def about():
    return render_template('about.html', title='About')

@app.route('/skills')
def skills():
    return render_template('skills.html', title='Skills')

@app.route('/projects')
def projects():
    return render_template('projects.html', title='Projects')

@app.route('/contact')
def contact():
    return render_template('contact.html', title='Contact')

# This is used when running the Flask app directly
if __name__ == '__main__':
    app.run(debug=True)

# This is used when generating static files
if __name__ == '__main__' and os.environ.get('FREEZE'):
    freezer.freeze() 