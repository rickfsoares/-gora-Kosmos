import os

import flask
from flask_apscheduler import APScheduler
from databases.db_redis import DB_Redis
from jobs.stock import update_stock_data
from flask_socketio import SocketIO, emit


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
socketio = SocketIO(app)


@app.route("/health-check", methods=["GET"])
def health_check():
    return "Server is up and running", 200


@app.route("/stock/<stock>", methods=["GET"])
def get_stock_data(stock):
    redis = DB_Redis()
    data = redis.get_stock_data(stock)
    return flask.jsonify(data), 200

@app.route("/stock/gerar-ativos", methods=["GET"])
def gerar_ativos():
    update_stock_data()


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    socketio.run(app, host='0.0.0.0', port=port)

