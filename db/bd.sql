CREATE DATABASE paw;

USE paw;

CREATE TABLE usuarios(
    idusuario INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    usuario VARCHAR(50),
    clave VARCHAR(255),
    token VARCHAR(12),
    tipo INT,
    estado INT
);