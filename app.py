from flask import Flask, render_template, redirect, url_for, request, jsonify
import json, random, copy
from random import randint
from flask_socketio import SocketIO, join_room, leave_room, emit
import game

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'

# Creates list of the json file
def load_statements():
    with open("data/politifact.json") as json_file:
        data = json.load(json_file)
    return data

# Loads the answer of the current statement
def load_statement_data(statement_id):
    data = load_statements()
    sdata = data[int(statement_id)]["label"]
    return sdata

# Loads the sources description and link url
def load_source_data(statement_id):
    data = load_statements()
    temp = data[int(statement_id)]
    sourcedata = temp["sources"]
    #sourcenumber = 0
    #links = sourcedata[sourcenumber]
    #sourcenumber += 1
    #if sourcenumber == len(sourcedata):
    #    sourcenumber = 1
    return sourcedata

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

# Sends source data to the page
@app.route('/sourcereturn', methods=['GET', 'POST'])
def sourcereturn():
    statement_id = request.args.get("statement_id", None)
    sourcedata = load_source_data(statement_id)
    if statement_id:
        answer = sourcedata
        return jsonify(answer)
    return ""



if __name__ == "__main__":
    app.run()