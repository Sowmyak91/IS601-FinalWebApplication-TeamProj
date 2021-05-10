CREATE DATABASE myflaskapp;
use myflaskapp;

CREATE TABLE IF NOT EXISTS users (
         `id` INT(11) AUTO_INCREMENT,
         `name` VARCHAR(100) ,
         `email` VARCHAR(100) ,
         `username` VARCHAR(30) ,
         `password` VARCHAR(100) ,
         `register_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
         PRIMARY KEY (`id`)
    );