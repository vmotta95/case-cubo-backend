-- Active: 1686233014283@@127.0.0.1@3306
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    participation INT NOT NULL
);
