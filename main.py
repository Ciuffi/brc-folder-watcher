import sys
from watchdog.observers import Observer
from watchdog.events import LoggingEventHandler
from watcher import *
import time
def createWatcher():
    path = sys.argv[1] if len(sys.argv) > 1 else '.'
    brcwatcher = brcWatcher()
    return path, brcwatcher

if __name__ == "__main__":
    path, event_handler = createWatcher()
    observer = createObserver(path, event_handler)
    observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()