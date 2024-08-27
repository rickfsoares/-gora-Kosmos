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

            opening_price = float(fist_row['1. open'])
            closing_price = float(fist_row['4. close'])
            volume = float(fist_row['5. volume'])
            current_price = float(fist_row['3. low'])

            logging.debug(f"{opening_price} - {closing_price} - {volume} - {current_price}")

            db.update_stock(id_stock, current_price, volume, opening_price, closing_price)
            redis.save_stock_data(data, nome)
        except Exception as e:
            logging.error(f"Erro ao buscar dados do ativo {nome} com as chaves disponíveis")


    db.close()
    logging.debug("Fechando conexão com o banco de dados")
