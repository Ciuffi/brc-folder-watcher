import sys

from src.watcher import createObserver, brcWatcher
from src.database_handler import database_handler
import time
from flask import Flask, request, render_template, jsonify

db_handler = database_handler('mongodb://127.0.0.1:27017/')

# Start folder watcher


def createWatcher():
    path = '.'
    brcwatcher = brcWatcher(db_handler)
    return path, brcwatcher


path, event_handler = createWatcher()
observer = createObserver(path, event_handler)
observer.start()

# Start web server
app = Flask(__name__)


@app.route('/api/currentRun')
def currentRun():
    try:
        lastRun = db_handler.get_last_run()
    except:
        print('Failed to connect to the database.')
        return
    if (lastRun == {}):
        return '', 500
    return jsonify(filename=lastRun["name"],
                   processed=lastRun["processed"],
                   error=lastRun["error"])


@app.route('/api/history')
def history():
    history = db_handler.get_run_history()
    historyList = map(lambda x: {k: db_handler.toJsString(v) if type(
        v) == bool else str(v) for k, v in x.items()}, history)
    return jsonify(list(historyList))


@app.route('/api/newRun', methods=['POST'])
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
