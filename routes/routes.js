const connection = require('../connection');
const express = require('express');
const router = express.Router();



// HTML View
router.get('/', function (req, res) {
    res.render('addMovie', {
        title: 'Home Page'
    });
});


router.get('/movies', function (req, res) {

    connection.query('SELECT * FROM movies', function(err, data) {
        if (err) throw err; // TODO:
    
        res.render('movies', { movies: data });
    });
});


router.get('/delete', function (req, res) {
    res.render('deleteMovie', {
        title: 'About Page'
    });
});



// API
router.post('/add/movies', function(req, res) {
    const movies = req.body; // { name: 'The Avengers', description: 'Great movie', rating: '3' }
    console.log('Movies: ', movies);

    connection.query('INSERT INTO movies SET ?', movies, function (err, data) {
        if (err) throw err; // TODO:

        res.redirect('/v1/movies');
    });
});

module.exports = router;