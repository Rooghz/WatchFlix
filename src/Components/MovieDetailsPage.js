import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons'
import { HiShare } from 'react-icons/hi';
import Play from '../Assets/PlayBt.svg'
import IMDB from '../Assets/IMDB.svg'


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
                <div className="movie-container">
                    <img className="movie-img" src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} alt={movieDetails.title} />
                    <div className='flex items-center justify-around mb-6 movdet movie-details'>
                        <h2 className='movie-details-title mr-10 ml-10'>{movieDetails.title}</h2>
                        <div className='flex mv-bt mr-14'>
                            <div className='flex flex-col items-center space-y-2 f-text mt-12'>
                                <AddIcon className='add-bt' boxSize={4} />
                                <span>WATCHLIST</span>
                            </div>
                            <div className='flex flex-col items-center space-y-2 f-text ml-10 mt-12'>
                                <HiShare size={21} />
                                <span>SHARE</span>
                            </div>
                            <img src={Play} alt="play-button" />
                        </div>
                    </div>
                    <div className='flex rating mb-14 mt-14'>
                        <div className='flex'>
                            <img className="imdb-img" src={IMDB} alt="imdb" />
                            <p>{movieDetails.vote_average}</p>
                        </div>
                        <p>{movieDetails.runtime} min</p>
                        <p>{movieDetails.release_date.slice(0, 4)}</p>
                    </div>
                    <p className='movie-details-text'>{movieDetails.overview}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );

};

export default MovieDetailsPage;
