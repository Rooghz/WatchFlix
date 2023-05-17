import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
                <div>
                    {/* Render the featured movie */}
                    {featuredMovie && (
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500/${featuredMovie.poster_path}`} alt={featuredMovie.title} />
                            <h2>{featuredMovie.title}</h2>
                            <p>{featuredMovie.overview}</p>
                            <p>Rating: {featuredMovie.vote_average}</p>
                            <Link to={`/movies/${featuredMovie.id}`}>Watch Now</Link>
                        </div>
                    )}
                </div>
                <div>
                    <h3>Trending Now</h3>
                    {/* Render the trending movies */}
                    {trendingMovies.map(movie => (
                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                            </div>
                        </Link>
                    ))}
                </div>
                <div>
                    <h3>Horror</h3>
                    {/* Render the horror movies */}
                    {horrorMovies.map(movie => (
                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                            </div>
                        </Link>
                    ))}
                </div>
                <div>
                    <h3>Sci-Fi</h3>
                    {/* Render the sci-fi movies */}
                    {sciFiMovies.map(movie => (
                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
