# BRC folder watcher

A simple python script that watches a folder for created files, moves them to the correct spot and updates a SLIMSdb.

### Requirements:
- [Pipenv](https://github.com/pypa/pipenv)
- [SLIMS API](https://slims-python-api.readthedocs.io/en/latest/)
- [Watchdog](https://pypi.org/project/watchdog/)

### How to run:
- Run `pipenv install` in this directory
- Run `pipenv run python main.py` to start the watcher

The watcher will log all events happening and what it will do about them (update SLIMS, move files, etc)