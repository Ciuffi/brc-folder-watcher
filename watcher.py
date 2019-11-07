from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler, FileSystemEvent
import logging
logging.basicConfig(level=logging.INFO,
                        format='%(asctime)s - %(message)s',
                        datefmt='%Y-%m-%d %H:%M:%S')

class brcWatcher(FileSystemEventHandler):
    def on_moved(self, event: FileSystemEvent):
        super(brcWatcher, self).on_moved(event)
        what = 'directory' if event.is_directory else 'file'
        logging.info("Moved %s: from %s to %s", what, event.src_path,
                     event.dest_path)

    def on_created(self, event):
        super(brcWatcher, self).on_created(event)
        print("file created wohoo")
        what = 'directory' if event.is_directory else 'file'
        logging.info("Created %s: %s", what, event.src_path)

    def on_deleted(self, event):
        super(brcWatcher, self).on_deleted(event)

        what = 'directory' if event.is_directory else 'file'
        logging.info("Deleted %s: %s", what, event.src_path)

    def on_modified(self, event):
        super(brcWatcher, self).on_modified(event)
        print('saved!')
        what = 'directory' if event.is_directory else 'file'
        logging.info("Modified %s: %s", what, event.src_path)

def createObserver(path, event_handler):
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    return observer