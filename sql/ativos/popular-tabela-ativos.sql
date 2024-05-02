CREATE TABLE IF NOT EXISTS ativos(
    id_ativo SERIAL PRIMARY KEY,
    nome VARCHAR NOT NULL,
    descricao VARCHAR NOT NULL,
    cotacao NUMERIC(20, 2) NOT NULL,
    volume INTEGER NOT NULL
);


INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('BlackRock', 'black rock', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Meta', 'meta', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Apple', 'apple', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Microsoft', 'microsoft', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Nasdaq', 'nasdaq', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Riot Games', 'riot', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Nvidia', 'nvidia', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('American Airlines Group', 'American Airlines Group Inc', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Warner Bros. Entertainment', 'Warner Bros', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Terawulf Inc', 'TeraWulf', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Workhorse Group', 'Workhorse', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Cisco Systems', 'Cisco', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Avenue Therapeutics Inc', 'Avenue Therapeutics', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Patterson-UTI', 'Patterson-UIT Energy Inc', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Paramount Global', 'Paramount Global', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Mondelez International', 'Mondelez International', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Connexa Sports Technologies Inc', 'Connexa Sports Technologies', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Aurora Innovation, Inc', 'Aurora Innovation Inc - Class A', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Marvell Technology Inc', 'Marvell Technology Inc', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('PayPal Holdings Inc', 'PayPal Holdings Inc', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Western Digital Corp', 'Western Digital Corp', 0.00, 0);
INSERT INTO ativos (nome, descricao, cotacao, volume) VALUES ('Iris Energy', 'Iris Energy', 0.00, 0);



