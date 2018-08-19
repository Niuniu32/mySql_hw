DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT NOT NULL,

product_name VARCHAR(30) NULL ,

department_name VARCHAR(30) NULL,

price DECIMAL(10,4) NULL,

stock_quantity INT NULL,

PRIMARY KEY (id)
);
INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Intel CPU","Computer","499","1000");

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("AMD CPU","Computer","399","800");

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Nvidia GPU","Computer","899","1000");

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("AMD GPU","Computer","499","1000");

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Apples","Food","0.99","10000");

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Pear","Food","0.99","20000");

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Pork","Food","20.99","10000");

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Beef","Food","25.99","10000");

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Books","Education","59.99","1040");

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Lego","Toys","499","1500");