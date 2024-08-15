import json
import os
import pandas as pd
import redis


class DB_Redis:
    def __init__(self):
        self.redis = redis.Redis(
            host=os.environ.get("REDIS_HOST"),
            port=os.environ.get("REDIS_PORT"),
        )

    def save_stock_data(self, data: pd.DataFrame, stock: str) -> None:
        for dict_item in data.to_dict("records"):
            self.redis.lpush(stock, json.dumps(dict_item))

    def get_stock_data(self, stock: str) -> list[dict]:
        data_stock = self.redis.lrange(stock, 0, -1)
        data_stock = [json.loads(data) for data in data_stock]
        return data_stock
