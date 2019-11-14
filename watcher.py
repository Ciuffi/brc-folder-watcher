from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler, FileSystemEvent
import logging
import os
logging.basicConfig(level=logging.INFO,
                        format='%(asctime)s - %(message)s',
                        datefmt='%Y-%m-%d %H:%M:%S')
class brcWatcher(FileSystemEventHandler):
    file_name = 'unset'
    processed = False
    dirName = 'files'
    error = False

    def on_moved(self, event: FileSystemEvent):
        super(brcWatcher, self).on_moved(event)
        #Make sure a filename has been set.
        if (self.file_name == 'unset'):
            return
        #Make sure the file isn't being removed.
        if (self.dirName not in event.dest_path or self.dirName in event.src_path):
            return
        
        #move the file
        try:
            os.rename(f'{os.getcwd()}/{self.dirName}/{event.src_path[2:]}', f'{os.getcwd()}/{self.dirName}/{self.file_name}.txt')
            self.processed = True
        except(Exception):
            print(Exception.with_traceback())
            self.processed = False
            self.error = True

        #Set processed to true if everything went well
    def setFileName(self, newName):
        self.file_name = newName;
        self.processed = False
    
def createObserver(path, event_handler):
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    return observer