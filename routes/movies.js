const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// Get all movies
router.get('/', (req, res) => {
    Movie.find()
        .then((movies) => res.json(movies))
        .catch((error) => res.status(500).json({ error }));
});

// Add a new movie
router.post('/', (req, res) => {
    const { title, description, image } = req.body;
    const movie = new Movie({ title, description, image });
    movie
        .save()
        .then((movie) => res.status(201).json(movie))
        .catch((error) => res.status(500).json({ error }));
});

// Update a movie
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, image } = req.body;

    Movie.findByIdAndUpdate(id, { title, description, image }, { new: true })
        .then((movie) => {
            if (!movie) {
                return res.status(404).json({ message: 'Movie not found' });
            }
            res.json(movie);
        })
        .catch((error) => res.status(500).json({ error }));
});

// Delete a movie
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Movie.findByIdAndRemove(id)
        .then(() => res.status(204).json())
        .catch((error) => res.status(500).json({ error }));
});

module.exports = router;
