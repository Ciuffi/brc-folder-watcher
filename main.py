import sys
from src.watcher import createObserver, brcWatcher
import time
from flask import Flask, request, render_template, jsonify


#Start folder watcher
def createWatcher():
    path = '.'
    brcwatcher = brcWatcher()
    return path, brcwatcher
path, event_handler = createWatcher()
observer = createObserver(path, event_handler)
observer.start()

#Start web server
app = Flask(__name__)

@app.route('/api/currentRun')
def currentRun():
    return jsonify(filename=event_handler.file_name, 
                   processed=event_handler.processed,
                   error=event_handler.error)
@app.route('/api/newRun', methods = ['POST'])
def newRun():
    if (request.method == 'POST' and request.form['fileName'] is not None):        
        event_handler.setFileName(request.form['fileName'])
        print(event_handler.file_name)
        return '', 200
    else:
        return '', 500


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    print(path)
    return render_template("index.html")