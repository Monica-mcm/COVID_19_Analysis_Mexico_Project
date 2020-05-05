# import necessary libraries
import os
import sqlite3
from sqlalchemy import create_engine
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

from flask_sqlalchemy import SQLAlchemy

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "sqlite:///Covid19MexicoData.sqlite"

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

#from .models import Pet


# create route that renders index.html template
@app.route("/")
def read_from_db():
    return render_template("index.html")

@app.route("/about")
def plot1():
    return render_template("form.html")


if __name__ == "__main__":
    app.run()
