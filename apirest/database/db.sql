CREATE DATABASE finance;
USE finance;
CREATE TABLE users(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(250) NOT NULL
);
CREATE TABLE operation (
    id INT(11) NOT NULL AUTO_INCREMENT,
    concept VARCHAR(50) NOT NULL,
    price FLOAT NOT NULL,
    date date NOT NULL,
    type VARCHAR(50) NOT NULL,
    categories VARCHAR(50) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (id) REFERENCES users(id)
);
