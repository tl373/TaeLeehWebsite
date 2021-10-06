"""
Export FLASK_APP=hello.py
export FLASK_DEBUG=1 for debug mode
flask run

for macOS and

set FLASK_APP=hello.py
flask run
for windows
 """
"""
pip install the following
pip install flask,flask-moment, flask-bootstrap, flask-WTF
"""
import time
from flask import Flask, request, app, make_response, redirect, render_template, send_file
from flask_bootstrap import Bootstrap  # design aspect (front end)
from flask_moment import Moment  # time of local machine
from datetime import datetime  # imports date time function to show current time



app = Flask(__name__)  # find the location of the application
bootstrap = Bootstrap(app)  # bootstrap application
moment = Moment(app)
app.config['SECRET_KEY'] = 'hard to guess string'

db = list()


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html', current_time=datetime.utcnow())


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500


if __name__ == '__main__':
    app.run(port=8080)
