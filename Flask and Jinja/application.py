from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    someArray = ["/<your pathway>"]

    return render_template("index.html", slides=someArray)
