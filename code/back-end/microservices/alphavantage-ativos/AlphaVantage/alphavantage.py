import logging

from alpha_vantage.timeseries import TimeSeries
from os import environ
from pandas import DataFrame


class AlphaVantage:
    def __init__(self):
        self.api_key = environ.get('ALPHA_VANTAGE_API_KEY').split(',')
        self.ts = TimeSeries(key=self.api_key[0], output_format='pandas')


    def get_stock_data(self, stock: str) -> DataFrame:
        for key in self.api_key:
            try:
                self.ts.key = key
                data, meta_data = self.ts.get_intraday(symbol=stock, interval='1min', outputsize='full')
                data.reset_index(inplace=True)
                data.rename(columns={'date': 'time'}, inplace=True)
                data['time'] = data['time'].dt.strftime('%Y-%m-%d %H:%M:%S')
                return data

            except Exception as e:
                continue
