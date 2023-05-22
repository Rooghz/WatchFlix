import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        // Fetch movie details data
        axios
            .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=f6b72f9ff85189fd9631dda6e2f43254&language=en-US`)
            .then(response => {
                setMovieDetails(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [movieId]);

    return (
        <div className='app-container'>
            {movieDetails ? (
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} />
                    <h2>{movieDetails.title}</h2>
                    <p>{movieDetails.overview}</p>
                    <p>IMDb Rating: {movieDetails.vote_average}</p>
                    <p>Duration: {movieDetails.runtime} min</p>
                    <p>Release Year: {movieDetails.release_date.slice(0, 4)}</p>
                    <button>Watch Now</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MovieDetailsPage;
