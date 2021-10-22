DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

USE movies_db;

DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_name VARCHAR(100)
);

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    review TEXT,
    movie_id INT,
    FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE SET NULL
);


INSERT INTO movies (movie_name)
VALUES  ("Spiderman"),
        ("Coco"),
        ("Titanic"),
        ("Batman");


INSERT INTO reviews (movie_id, review)
VALUES  (1, "Man gets bit by spider and has super powers"),
        (2, "Boy meets dead father in the afterlife"),
        (3, "Rose let Jack go"),
        (4, "Half bat half man");