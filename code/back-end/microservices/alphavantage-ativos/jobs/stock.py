import pandas

from AlphaVantage.alphavantage import AlphaVantage
from databases.stock import DB
from databases.db_redis import DB_Redis
import logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')


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
            fist_row: pandas.DataFrame = data.iloc[0].values
            db.update_stock(id_stock, float(fist_row[3]), float(fist_row[4]))
            redis.save_stock_data(data, nome)
        except Exception as e:
            logging.error(f"Erro ao buscar dados do ativo {nome} com as chaves disponíveis")

    db.close()
    logging.debug("Fechando conexão com o banco de dados")