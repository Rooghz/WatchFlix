import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BladeRunner from '../Assets/BladeRunner.svg';
import Rating from '../Components/Rating';
import WatchNow from '../Components/WatchNow';
import { AddIcon } from '@chakra-ui/icons';
import { HiShare } from 'react-icons/hi';
import ReactPlayer from 'react-player';

const HomePage = () => {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    const [featuredMovie, setFeaturedMovie] = useState(null);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [horrorMovies, setHorrorMovies] = useState([]);
    const [sciFiMovies, setSciFiMovies] = useState([]);
    const sliderRef = useRef([]);
    const [showTrailer, setShowTrailer] = useState(false);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        // Fetch featured movie data
        axios
            .get('https://api.themoviedb.org/3/movie/335984?api_key=' + apiKey)
            .then(response => {
                setFeaturedMovie(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        // Fetch trending movies data
        axios
            .get('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US&page=1')
            .then(response => {
                const trendingMoviesData = response.data.results.slice(0, 15);
                setTrendingMovies(trendingMoviesData);
            })
            .catch(error => {
                console.log(error);
            });

        // Fetch horror movies data
        axios
            .get('https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&language=en-US&sort_by=popularity.desc&with_genres=27')
            .then(response => {
                const horrorMoviesData = response.data.results.slice(0, 15);
                setHorrorMovies(horrorMoviesData);
            })
            .catch(error => {
                console.log(error);
            });

        // Fetch sci-fi movies data
        axios
            .get('https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&language=en-US&sort_by=popularity.desc&with_genres=878')
            .then(response => {
                const sciFiMoviesData = response.data.results.slice(0, 15);
                setSciFiMovies(sciFiMoviesData);
            })
            .catch(error => {
                console.log(error);
            });
    }, [apiKey]);

    const settings = {
        slidesToShow: 8,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
        afterChange: () => {
            // Force a re-render of the Slider component to update slide dimensions
            sliderRef.current.slickGoTo(0);
        },
    };

    const handleWatchNow = (trailerUrl) => {
        setTrailerUrl(trailerUrl);
        setShowTrailer(true);
    };

    return (
        <div className="home-container">
            <section>
                <div className="mt-6">
                    {/* Render the featured movie */}
                    {featuredMovie && (
                        <div className="featured">
                            <div className="image-overlay" />
                            <img src={BladeRunner} alt={featuredMovie.title} />
                            <div className="featured-details">
                                <h2>{featuredMovie.title}</h2>
                                <p className="mb-3">{featuredMovie.overview}</p>
                                <Rating rating={4} />

                                <div className="flex space-x-9 mt-10 items-center">
                                    <button onClick={() => handleWatchNow('https://www.youtube.com/watch?v=gCcx85zbxz4')}>
                                        <WatchNow className="watch" />
                                    </button>
                                    <div className="flex flex-col items-center space-y-2 f-text">
                                        <AddIcon className="mb-1" boxSize={4} />
                                        <span>WATCHLIST</span>
                                    </div>
                                    <div className="flex flex-col items-center space-y-2 f-text">
                                        <HiShare size={21} />
                                        <span>SHARE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* Render the trailer */}
                {showTrailer && (
                    <div className="trailer-overlay">
                        <div className="trailer-container">
                            <ReactPlayer url={trailerUrl} width="100%" height="100%" controls playing />
                            <button className="close-btn" onClick={() => setShowTrailer(false)}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
                <hr className="line" />
                <div className="flex flex-col space-y-3 mt-10">
                    <h3 className="home-text">Trending Now</h3>
                    {/* Render the trending movies */}
                    <div className="flex flex-row space-x-5">
                        <div className="similar-movies-slider">
                            <Slider ref={sliderRef} {...settings}>
                                {trendingMovies.map(movie => (
                                    <Link to={`/movies/${movie.id}`} key={movie.id}>
                                        <div className="poster-img">
                                            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                                        </div>
                                    </Link>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 mt-14">
                    <h3 className="home-text">Horror</h3>
                    {/* Render the horror movies */}
                    <div className="flex flex-row space-x-5">
                        <div className="similar-movies-slider">
                            <Slider ref={sliderRef} {...settings}>
                                {horrorMovies.map(movie => (
                                    <Link to={`/movies/${movie.id}`} key={movie.id}>
                                        <div className="poster-img">
                                            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                                        </div>
                                    </Link>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 mt-14">
                    <h3 className="home-text">Sci-Fi</h3>
                    {/* Render the sci-fi movies */}
                    <div className="flex flex-row space-x-5">
                        <div className="similar-movies-slider">
                            <Slider ref={sliderRef} {...settings}>
                                {sciFiMovies.map(movie => (
                                    <Link to={`/movies/${movie.id}`} key={movie.id}>
                                        <div className="poster-img">
                                            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                                        </div>
                                    </Link>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
