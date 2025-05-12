CREATE TABLE user (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

-- #03 using sql cli: create schema.sql 

-- in terminal command

-- mysql -u root -p 
-- password:
-- show database
-- use delta_app
-- source schema.sql -> for run under program in schema.sql 