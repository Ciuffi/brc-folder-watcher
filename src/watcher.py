from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler, FileSystemEvent
import logging
import os
from src.database_handler import database_handler
logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')
class brcWatcher(FileSystemEventHandler):
    db_handler: database_handler
    dirName = "files"
    def __init__(self, db_handler):
        super(brcWatcher, self).__init__()
        self.db_handler = db_handler    

    def on_moved(self, event: FileSystemEvent):
        super(brcWatcher, self).on_moved(event)
        #Make sure a filename has been set.
        print(event.src_path)
        lastRun = self.db_handler.get_last_run()
        if (lastRun["processed"]):
            return
        #Make sure the file isn't being removed.
        if (self.dirName not in event.dest_path or self.dirName in event.src_path):
            return
        #move the file
        try:
            file_start = event.src_path.rfind('/')
            os.rename(f'{os.getcwd()}/{self.dirName}/{event.src_path[file_start:]}', f'{os.getcwd()}/{self.dirName}/{lastRun["name"]}.txt')
            self.db_handler.updateRun(lastRun["_id"], processed=True, error=False)
        except Exception as e:
            print(e)
            self.db_handler.updateRun(lastRun["_id"], processed=False, error=True)
    
def createObserver(path, event_handler):
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    return observer