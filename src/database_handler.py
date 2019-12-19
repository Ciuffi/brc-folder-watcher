import pymongo

from pymongo.collection import Collection
from pymongo.database import Database
from pymongo.cursor import Cursor
from datetime import datetime


class database_handler():
    client: pymongo.MongoClient
    COLLECTION_NAME = 'runs'
    DATABASE_NAME = 'brc'
    db: Database
    collection: Collection

    def __init__(self, db_string):
        self.client = pymongo.MongoClient(db_string)
        self.db = self.client[self.DATABASE_NAME]
        self.collection = self.db[self.COLLECTION_NAME]

    @staticmethod
    def toJsString(boolean):
        return 'true' if boolean else 'false'

    def record_run(self, run_name: str, processed: bool, error: bool) -> None:
        """Record a new run. All paremeters are required """
        self.collection.insert_one({
            "name": run_name,
            "processed": processed,
            "error": error,
            "created": datetime.utcnow()
        })

    def get_run_names(self) -> Cursor:
        """Return the Name and Ids of all runs"""
        return self.collection.find({}, {"name": 1, "_id": 1})

    def get_run_history(self) -> Cursor:
        return self.collection.find().sort([("_id", pymongo.DESCENDING)]).limit(10)

    def get_last_run(self) -> dict:
        """Get the last/current run"""
        lastRun = self.collection.find({}).sort(
            [("_id", pymongo.DESCENDING)]).limit(1)
        if (lastRun.count() > 0):
            return lastRun[0]
        else:
            return {}

    def updateRun(self, id, **kwargs):
        """Update a run with new data"""
        return self.collection.update_one({"_id": id}, {"$set": kwargs})
