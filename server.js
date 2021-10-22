const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

const mysql = require('mysql2');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
  );


app.get('/api/movies', (req, res) => {
    db.query('SELECT movie_name FROM movies', function (err, results) {
        res.json(results);
      });      
});

app.get('/api/reviews', (req, res) => {
    db.query('SELECT review FROM reviews', function (err, results) {
        res.json(results);
    })
})

app.post('/api/add-movie', (req, res) => {
    console.info(`${req.method} request received to add a review`);

    db.query('INSERT INTO movies', function (err, req) {
        const movie_name = req.body;
        res.json(movie_name);
    })
})


// Tell express to start listening!
app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);