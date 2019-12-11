import sys

from src.watcher import createObserver, brcWatcher
from src.database_handler import database_handler
import time
from flask import Flask, request, render_template, jsonify

db_handler = database_handler('mongodb://127.0.0.1:27017/')

#Start folder watcher
def createWatcher():
    path = '.'
    brcwatcher = brcWatcher(db_handler)
    return path, brcwatcher
path, event_handler = createWatcher()
observer = createObserver(path, event_handler)
observer.start()

#Start web server
app = Flask(__name__)

@app.route('/api/currentRun')
def currentRun():
    lastRun = db_handler.get_last_run()
    if (lastRun == {}):
        return '', 500
    return jsonify(filename=lastRun["name"], 
                   processed=lastRun["processed"],
                   error=lastRun["error"])

@app.route('/api/newRun', methods = ['POST'])
def newRun():
    if (request.method == 'POST' and request.form['fileName'] is not None):  
        db_handler.record_run(request.form['fileName'], False, False)      
        return '', 200
    else:
        return '', 500


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")