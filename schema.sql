CREATE TABLE usuarios (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(80),
    email VARCHAR(120),
    senha VARCHAR(50)
);

CREATE TABLE contas (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(80),
    usuario_id INT
);

CREATE TABLE categorias (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(80),
	usuario_id INT
);

CREATE TABLE movimentacoes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(80),
    data DATETIME,
    valor DOUBLE,
    tipo VARCHAR(1),
    conta_id INT,
    categoria_id INT
);

INSERT INTO usuarios(nome, email, senha) VALUES('Igo Coelho', 'igo@coelho.com', '1234');

INSERT INTO contas(nome, usuario_id) VALUES('Conta inicial', 1);

INSERT INTO categorias(nome, usuario_id) VALUES('Alimentação', 1);
INSERT INTO categorias(nome, usuario_id) VALUES('Lazer', 1);
INSERT INTO categorias(nome, usuario_id) VALUES('Transporte', 1);
INSERT INTO categorias(nome, usuario_id) VALUES('Moradia', 1);
INSERT INTO categorias(nome, usuario_id) VALUES('Saúde', 1);
INSERT INTO categorias(nome, usuario_id) VALUES('Educação', 1);
INSERT INTO categorias(nome, usuario_id) VALUES('Salário', 1);

INSERT INTO movimentacoes(descricao, data, valor, tipo, conta_id, categoria_id)
VALUES('Compras mercantil', '2013-11-02', 110.5, 'D', 1, 1);
INSERT INTO movimentacoes(descricao, data, valor, tipo, conta_id, categoria_id)
VALUES('Restaurante com familia', '2013-11-02', 80.75, 'D', 1, 1);
INSERT INTO movimentacoes(descricao, data, valor, tipo, conta_id, categoria_id)
VALUES('Gasolina', '2013-11-05', 120.5, 'D', 1, 3);
INSERT INTO movimentacoes(descricao, data, valor, tipo, conta_id, categoria_id)
VALUES('Adiantamento quinzena', '2013-11-15', 1810.85, 'R', 1, 7);