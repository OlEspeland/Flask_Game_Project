from flask import Flask, render_template, redirect, url_for, request, jsonify
import json, random, copy
from random import randint

app = Flask(__name__)

# Creates list of the json file
def load_statements():
    with open("data/politifact.json") as json_file:
        data = json.load(json_file)
    return data

# Loads the answer of the current statement
def load_statement_data(statement_id):
    with open("data/politifact.json")as f:
        data = json.load(f)
        sdata = data[int(statement_id)]["label"]
    return sdata

# Welcome Page
@app.route('/')
def start():
    return render_template("start.html", name=None)

# Single player page
@app.route('/single')
def single():
    statements = load_statements()
    i = randint(1, len(statements)-1)
    return render_template("single.html", data=statements[i], i=i)

# Sends the answer for the current statement back to the web page
@app.route('/singlereturn', methods=['GET', 'POST'])
def statement():
    statement_id = request.args.get("statement_id", None)
    statementdata = load_statement_data(statement_id)
    if statement_id:
        answer = statementdata
        return jsonify(answer)
    return ""


if __name__ == "__main__":
    app.run()