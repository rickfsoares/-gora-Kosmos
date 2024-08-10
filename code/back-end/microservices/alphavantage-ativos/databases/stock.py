import os

import psycopg2


class DB:
    def __init__(self):
        self.conn = psycopg2.connect(
            dbname=os.environ.get("POSTGRES_DB"),
            user=os.environ.get("POSTGRES_USER"),
            password=os.environ.get("POSTGRES_PASSWORD"),
            host=os.environ.get("POSTGRES_HOST")
        )
        self.cursor = self.conn.cursor()

    def get_all_stocks(self):
        self.cursor.execute("SELECT * FROM stocks")
        return self.cursor.fetchall()

    def update_stock(self, id_ativo, cotacao, volume):
        self.cursor.execute("UPDATE stocks SET cotacao = %s, volume = %s WHERE id = %s", (cotacao, volume, id_ativo))
        self.conn.commit()

    def close(self):
        self.cursor.close()
        self.conn.close()





