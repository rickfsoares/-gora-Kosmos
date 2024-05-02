import logging

from alpha_vantage.timeseries import TimeSeries
from os import environ
from pandas import DataFrame


class AlphaVantage:
    def __init__(self):
        self.api_key = environ.get('ALPHA_VANTAGE_API_KEY')

        self.ts = TimeSeries(key=self.api_key, output_format='pandas')

    def get_stock_data(self, stock: str) -> DataFrame:
        try:
            data, meta_data = self.ts.get_intraday(symbol=stock, interval='1min', outputsize='full')
            data.reset_index(inplace=True)
            data.rename(columns={'index': 'time'}, inplace=True)
            return data

        except Exception as e:
            raise e
