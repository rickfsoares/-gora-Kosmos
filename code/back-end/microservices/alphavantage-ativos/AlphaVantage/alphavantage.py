import logging

from alpha_vantage.timeseries import TimeSeries
from os import environ
from pandas import DataFrame


class AlphaVantage:
    def __init__(self):
        self.api_key = environ.get('ALPHA_VANTAGE_API_KEY').split(',')
        self.ts = TimeSeries(key=self.api_key[0], output_format='pandas')


    def get_stock_data(self, stock: str) -> DataFrame:
        has_data = False
        logging.error(self.api_key)
        for key in self.api_key:
            try:
                self.ts.key = key
                data, meta_data = self.ts.get_intraday(symbol=stock, interval='1min', outputsize='full')
                data.reset_index(inplace=True)
                data.rename(columns={'date': 'time'}, inplace=True)
                data['time'] = data['time'].dt.strftime('%Y-%m-%d %H:%M:%S')
                has_data = True
                return data

            except Exception as e:
                logging.error(f"Erro ao buscar dados do ativo {stock} na API Alpha Vantage: {key}")
                has_data = False
                continue

        if not has_data:
            raise Exception("Não foi possível buscar os dados do ativo na API Alpha Vantage com as chaves disponíveis")


