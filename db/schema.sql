DROP DATABASE IF EXISTS movies_dev;

CREATE DATABASE movies_dev;

\c movies_dev;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    director TEXT,
    release_date TEXT NOT NUll,
    genre TEXT,
    duration INT,
    rating DECIMAL(3, 1) NOT NULL,
    has_emmy BOOLEAN
);
