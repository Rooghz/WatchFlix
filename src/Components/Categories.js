import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoriesPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(
                    'https://api.themoviedb.org/3/genre/movie/list',
                    {
                        params: {
                            api_key: process.env.REACT_APP_TMDB_API_KEY,
                            language: 'en-US',
                        },
                    }
                );

                const genres = response.data.genres.slice(0, 12);
                const genreMovies = await Promise.all(
                    genres.map(async (genre) => {
                        const movieResponse = await axios.get(
                            'https://api.themoviedb.org/3/discover/movie',
                            {
                                params: {
                                    api_key: process.env.REACT_APP_TMDB_API_KEY,
                                    with_genres: genre.id,
                                },
                            }
                        );

                        const movies = movieResponse.data.results;
                        const shuffledMovies = shuffleArray(movies);
                        const movie = shuffledMovies[0];
                        return {
                            id: genre.id,
                            name: genre.name,
                            movie: movie,
                        };
                    })
                );

                setCategories(genreMovies);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCategories();
    }, []);

    // Shuffle an array using Fisher-Yates algorithm
    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ];
        }
        return shuffledArray;
    };

    return (
        <div className="categories-container">
            <div className="category-grid flex flex-wrap justify-center mt-14 mb-12">
                {categories.map((category) => (
                    <div key={category.id} className="category-card ml-8 mt-14">
                        {category.movie && (
                            <>
                                <div className="overlay"></div>
                                <img
                                    className="category-image"
                                    src={`https://image.tmdb.org/t/p/w500/${category.movie.poster_path}`}
                                    alt={category.name}
                                />
                                <h3 className="overlay-text">{category.name}</h3>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

};

export default CategoriesPage;
