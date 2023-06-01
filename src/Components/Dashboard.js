import React, { useState, useEffect } from 'react';
import MovieForm from '../Components/Forms/MovieForm';
import MovieList from '../Components/Lists/MovieList';

const Dashboard = () => {
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);

    // Fetch movies from the API
    useEffect(() => {
        fetch('http://localhost:5000/api/movies')
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.log(error));
    }, []);

    const handleAddMovie = (movie) => {
        if (!movie.title || !movie.description || !movie.image) {
            setErrorMessage('Please fill in all the fields.');
            return;
        }

        fetch('http://localhost:5000/api/movies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(movie),
        })
            .then((response) => response.json())
            .then((data) => {
                setMovies([...movies, data]);
                setErrorMessage('');
            })
            .catch((error) => console.log(error));
    };

    const handleUpdateMovie = (movie) => {
        if (!movie.title || !movie.description || !movie.image) {
            setErrorMessage('Please fill in all the fields.');
            return;
        }

        fetch(`http://localhost:5000/api/movies/${movie._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(movie),
        })
            .then((response) => response.json())
            .then((data) => {
                const updatedMovies = movies.map((m) => (m._id === data._id ? data : m));
                setMovies(updatedMovies);
                setErrorMessage('');
                setSelectedMovie(null);
            })
            .catch((error) => console.log(error));
    };

    const handleDeleteMovie = (id) => {
        fetch(`http://localhost:5000/api/movies/${id}`, { method: 'DELETE' })
            .then(() => setMovies(movies.filter((movie) => movie._id !== id)))
            .catch((error) => console.log(error));
    };

    const handleEditMovie = (movie) => {
        setSelectedMovie(movie);
    };

    const handleCancelEdit = () => {
        setSelectedMovie(null);
        setErrorMessage('');
    };

    return (
        <div className='api-container'>
            <h1 className='mb-6 dash'>Dashboard</h1>
            {errorMessage && <p>{errorMessage}</p>}
            {!selectedMovie ? (
                <MovieForm onSubmit={handleAddMovie} />
            ) : (
                <MovieForm
                    onSubmit={handleUpdateMovie}
                    onCancelEdit={handleCancelEdit}
                    movie={selectedMovie}
                />
            )}
            <MovieList movies={movies} onDelete={handleDeleteMovie} onEdit={handleEditMovie} />
        </div>
    );
};

export default Dashboard;
