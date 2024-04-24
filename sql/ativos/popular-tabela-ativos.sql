CREATE TABLE IF NOT EXISTS ativos(
    id_ativo SERIAL PRIMARY KEY,
    nome VARCHAR NOT NULL,
    descricao VARCHAR NOT NULL,
    cotacao NUMERIC(20, 2) NOT NULL,
    volume INTEGER NOT NULL
);


INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('black rock', 'black rock', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('tesla', 'tesla', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('meta', 'meta', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('apple', 'apple', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('microsoft', 'microsoft', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('nasdaq', 'nasdaq', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('riot', 'riot', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('nvidia', 'nvidia', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('American Airlines Group Inc', 'American Airlines Group Inc', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Warner Bros', 'Warner Bros', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('TeraWulf', 'TeraWulf', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Workhorse', 'Workhorse', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Cisco', 'Cisco', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Avenue Therapeutics', 'Avenue Therapeutics', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Patterson-UIT Energy Inc', 'Patterson-UIT Energy Inc', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Paramount Global', 'Paramount Global', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Mondelez International', 'Mondelez International', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Clover Health Investments', 'Clover Health Investments', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Connexa Sports Technologies', 'Connexa Sports Technologies', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Aurora Innovation Inc - Class A', 'Aurora Innovation Inc - Class A', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('ETF Opportunities Trust', 'ETF Opportunities Trust', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Marvell Technology Inc', 'Marvell Technology Inc', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('PayPal Holdings Inc', 'PayPal Holdings Inc', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Western Digital Corp', 'Western Digital Corp', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Valley National Bancorp', 'Valley National Bancorp', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Iris Energy', 'Iris Energy', 0.00, 0);



