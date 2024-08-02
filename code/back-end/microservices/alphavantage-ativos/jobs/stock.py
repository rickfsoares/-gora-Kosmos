import pandas

from AlphaVantage.alphavantage import AlphaVantage
from databases.stock import DB
from databases.db_redis import DB_Redis
import logging


def update_stock_data():
    db = DB()
    logging.info("Abrindo conexão com o banco de dados")
    alpha_vantage = AlphaVantage()
    logging.info("Abrindo conexão com a API Alpha Vantage")
    redis = DB_Redis()
    logging.info("Abrindo conexão com o Redis")
    stocks = db.get_all_stocks()
    logging.info("Buscando todos os ativos na base de dados")
    for stock in stocks:
        id_stock = stock[0]
        nome = stock[1]
        print(nome)
        try:
            data: pandas.DataFrame = alpha_vantage.get_stock_data(nome)
            logging.info(f"Buscando dados do ativo {nome} na API Alpha Vantage")
            fist_row: pandas.DataFrame = data.iloc[0]
            db.update_stock(id_stock, fist_row["4. close"], fist_row["5. volume"])
            logging.info(f"Atualizando a quantia de fechamento e volume do {nome} na base de dados")
            redis.save_stock_data(data, nome)
            logging.info(f"Salvando dados do ativo {nome} no Redis")
        except Exception as e:
            logging.error(f"Erro ao buscar dados do ativo {nome} na API Alpha Vantage: {e.__cause__}")

    db.close()
    logging.info("Fechando conexão com o banco de dados")