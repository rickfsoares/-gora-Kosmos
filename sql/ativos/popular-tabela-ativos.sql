CREATE TABLE IF NOT EXISTS ativos(
    id_ativo SERIAL PRIMARY KEY,
    nome VARCHAR NOT NULL,
    descricao VARCHAR NOT NULL,
    cotacao NUMERIC(20, 2) NOT NULL,
    volume INTEGER NOT NULL
);

INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('IBM', 'IBM', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('NVDA', 'NVDA', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('TSLA', 'TSLA', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('AAPL', 'AAPL', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('META', 'META', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('AMD', 'AMD', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('MSFT', 'MSFT', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('AMZN', 'AMZN', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('AVGO', 'AVGO', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('UNH', 'UNH', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('SMCI', 'SMCI', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('INTC', 'INTC', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('LLY', 'LLY', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('MU', 'MU', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('GOOG', 'GOOG', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('QCOM', 'QCOM', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('BAC', 'BAC', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('NSTR', 'NSTR', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('NFLX', 'NFLX', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('JPM', 'JPM', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('DELL', 'DELL', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('COIN', 'COIN', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('UBER', 'UBER', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('HD', 'HD', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('ORCL', 'ORCL', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('MCD', 'MCD', 0.00, 0);



