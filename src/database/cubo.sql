-- Active: 1686233014283@@127.0.0.1@3306
CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    participation INT NOT NULL
)