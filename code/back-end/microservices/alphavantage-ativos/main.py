import flask
import pandas
from flask_apscheduler import APScheduler
from db.db import DB
from AlphaVantage.alphavantage import AlphaVantage
from db_redis.db_redis import DB_Redis
import threading


def update_stock_data():
    db = DB()
    alpha_vantage = AlphaVantage()
    redis = DB_Redis()
    stocks = db.get_all_stocks()
    for stock in stocks:
        id_stock = stock[0]
        nome = stock[1]
        try:
            data: pandas.DataFrame = alpha_vantage.get_stock_data(nome)
            fist_row: pandas.DataFrame = data.iloc[0]
            db.update_stock(id_stock, fist_row["4. close"], fist_row["5. volume"])
            redis.save_stock_data(data, nome)

        except Exception as e:
            print(f"Error on stock {nome}: {e}")

    db.close()


thread = threading.Thread(target=update_stock_data)
thread.start()


class Config(object):
    JOBS = [
        {
            "id": "update_stock_data",
            "func": "main:update_stock_data",
            "trigger": "cron",
            "hour": 8,
            "minute": 0,
        }
    ]
    SCHEDULER_API_ENABLED = True


app = flask.Flask("-------------------Stock Market Analysis-------------------")
app.config.from_object(Config())
scheduler = APScheduler()
scheduler.init_app(app)
scheduler.start()


@app.route("/health-check", methods=["GET"])
def health_check():
    return "Server is up and running", 200


@app.route("/stock/<stock>", methods=["GET"])
def get_stock_data(stock):
    redis = DB_Redis()
    data = redis.get_stock_data(stock)
    return flask.jsonify(data), 200
