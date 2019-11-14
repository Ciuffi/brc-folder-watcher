import sys
from watchdog.observers import Observer
from watchdog.events import LoggingEventHandler
from watcher import *
import time
from flask import Flask, request
app = Flask(__name__)
def createWatcher():
    path = '.'
    brcwatcher = brcWatcher()
    return path, brcwatcher
path, event_handler = createWatcher()
observer = createObserver(path, event_handler)
observer.start()
@app.route('/', methods=['GET', 'POST'])
def index():
    if (request.method == 'POST'):        
        if (request.form['fileName'] is not None):
            event_handler.setFileName(request.form['fileName'])
            return f'''
            <body style="text-align: center;">
                <h1>BRC folder watcher </h1>
                <p style="color: green;">fileName set to: {event_handler.file_name}</p>
                <p id="countdown"> redirecting back in 5 seconds.. </p>
            </body>'''+'''
            <script>
                let timer = 5;
                setTimeout(() => {window.location.href = "/"}, 5000)
                const countDown = () => {
                    if (timer === 0){
                        return
                    }
                    timer -= 1
                    document.getElementById('countdown').innerHTML = `redirecting back in ${timer} seconds..`
                    setTimeout(countDown, 1000)
                }
                setTimeout(countDown, 1000)
            </script>
            '''
        else:
            return f'''
            <body style="text-align: center;">
                <h1>BRC folder watcher </h1>
                <p style="color: red;">Failed to set fileName. Current file is: {event_handler.file_name}</p>
            </body>'''
    response = f'''
    <body style="text-align: center;">
        <h1>BRC folder watcher </h1>
        <p>Input the name of the sample in the current run</p>
        <form action="/" method="post">
            <input type="text" name="fileName" placeholder="run name" value=""/>
            <input type="submit" value="submit"/>
        </form>
        <p> Current run name: {event_handler.file_name}</p>
        {'<p style="color: green;">This run has been processed! </p>' if event_handler.processed else '<p style="color: orange;">This file has not been processed</p>'}
        {'<p style="color: red;">Something went wrong.. Please check the stacktrace.</p>' if event_handler.error else ''}
    </body>
    '''
    return response