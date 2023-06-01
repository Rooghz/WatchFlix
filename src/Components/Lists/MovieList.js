import { ClassNames } from '@emotion/react';
import React from 'react';

const MovieList = ({ movies, onDelete, onEdit }) => {
    return (
        <ul className='flex flex-col'>
            {movies.map((movie) => (
                <li className='flex flex-wrap justify-between' key={movie._id}>
                    <div className='flex mr-6 mt-8'>
                        <img className="api-img" src={movie.image} alt={movie.title} />
                        <h2 className='ml-4 api-h'>{movie.title}</h2>
                        <p className='ml-4 api-d'>{movie.description}</p>
                    </div>
                    <div className='flex ml-6 mt-8'>
                        <button className='buttonClass' onClick={() => onEdit(movie)}>Update</button>
                        <button className='ml-4 delClass' onClick={() => onDelete(movie._id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default MovieList;
