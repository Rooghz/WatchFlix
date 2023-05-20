import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BladeRunner from '../Assets/BladeRunner.svg'
import Rating from '../Components/Rating'
import WatchNow from '../Components/WatchNow'
import { AddIcon } from '@chakra-ui/icons'
import { HiShare } from 'react-icons/hi';

const HomePage = () => {
    const [featuredMovie, setFeaturedMovie] = useState(null);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [horrorMovies, setHorrorMovies] = useState([]);
    const [sciFiMovies, setSciFiMovies] = useState([]);

    useEffect(() => {
        // Fetch featured movie data
        axios
            .get('https://api.themoviedb.org/3/movie/335984?api_key=f6b72f9ff85189fd9631dda6e2f43254')
            .then(response => {
                setFeaturedMovie(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        // Fetch trending movies data
        axios
            .get('https://api.themoviedb.org/3/movie/popular?api_key=f6b72f9ff85189fd9631dda6e2f43254&language=en-US&page=1')
            .then(response => {
                const trendingMoviesData = response.data.results.slice(0, 8);
                setTrendingMovies(trendingMoviesData);
            })
            .catch(error => {
                console.log(error);
            });

        // Fetch horror movies data
        axios
            .get('https://api.themoviedb.org/3/discover/movie?api_key=f6b72f9ff85189fd9631dda6e2f43254&language=en-US&sort_by=popularity.desc&with_genres=27')
            .then(response => {
                const horrorMoviesData = response.data.results.slice(0, 8);
                setHorrorMovies(horrorMoviesData);
            })
            .catch(error => {
                console.log(error);
            });

        // Fetch sci-fi movies data
        axios
            .get('https://api.themoviedb.org/3/discover/movie?api_key=f6b72f9ff85189fd9631dda6e2f43254&language=en-US&sort_by=popularity.desc&with_genres=878')
            .then(response => {
                const sciFiMoviesData = response.data.results.slice(0, 8);
                setSciFiMovies(sciFiMoviesData);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <header>
                {/* Header content */}
            </header>
            <section>
                <div className='mt-6'>
                    {/* Render the featured movie */}
                    {featuredMovie && (
                        <div className='featured'>
                            <div className="image-overlay" />
                            <img src={BladeRunner} alt={featuredMovie.title} />
                            <div className='featured-details'>
                                <h2>{featuredMovie.title}</h2>
                                <p className='mb-3'>{featuredMovie.overview}</p>
                                <Rating rating={4} />

                                <div className='flex space-x-9 mt-10 items-center'>
                                    <WatchNow className="watch" />
                                    <div className='flex flex-col items-center space-y-2 f-text'>
                                        <AddIcon className='mb-1' boxSize={4} />
                                        <span>WATCHLIST</span>
                                    </div>
                                    <div className='flex flex-col items-center space-y-2 f-text'>
                                        <HiShare size={21} />
                                        <span>SHARE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='flex flex-col space-y-3 mt-14'>
                    <h3>Trending Now</h3>
                    {/* Render the trending movies */}
                    <div className='flex flex-row space-x-5'>
                        {trendingMovies.map(movie => (
                            <Link to={`/movies/${movie.id}`} key={movie.id}>
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col space-y-3 mt-14'>
                    <h3>Horror</h3>
                    {/* Render the horror movies */}
                    <div className='flex flex-row space-x-5'>
                        {horrorMovies.map(movie => (
                            <Link to={`/movies/${movie.id}`} key={movie.id}>
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col space-y-3 mt-14'>
                    <h3>Sci-Fi</h3>
                    {/* Render the sci-fi movies */}
                    <div className='flex flex-row space-x-5'>
                        {sciFiMovies.map(movie => (
                            <Link to={`/movies/${movie.id}`} key={movie.id}>
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section >
        </div >
    );
};

export default HomePage;
