import pandas

from AlphaVantage.alphavantage import AlphaVantage
from databases.stock import DB
from databases.db_redis import DB_Redis
import logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')


def update_stock_data():
    db = DB()
    logging.debug("Abrindo conexão com o banco de dados")
    alpha_vantage = AlphaVantage()
    logging.debug("Abrindo conexão com a API Alpha Vantage")
    redis = DB_Redis()
    logging.debug("Abrindo conexão com o Redis")
    stocks = db.get_all_stocks()
    logging.debug("Buscando todos os ativos na base de dados")

    for stock in stocks:
        id_stock = stock[0]
        nome = stock[1]
        try:
            data: pandas.DataFrame = alpha_vantage.get_stock_data(nome)
            logging.debug(f"Buscando dados do ativo {nome} na API Alpha Vantage")
            fist_row: pandas.DataFrame = data.iloc[0].values
            logging.debug(f"Atualizando a quantia de fechamento e volume do {nome} na base de dados")
            db.update_stock(id_stock, float(fist_row[3]), float(fist_row[4]))
            redis.save_stock_data(data, nome)
            logging.debug(f"Salvando dados do ativo {nome} no Redis")
        except Exception as e:
            logging.error(f"Erro ao buscar dados do ativo {nome} na API Alpha Vantage: {e}")

    db.close()
    logging.debug("Fechando conexão com o banco de dados")