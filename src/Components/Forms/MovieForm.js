import React, { useState } from 'react';

const MovieForm = ({ onSubmit, onCancelEdit, movie }) => {
    const [title, setTitle] = useState(movie ? movie.title : '');
    const [description, setDescription] = useState(movie ? movie.description : '');
    const [image, setImage] = useState(movie ? movie.image : '');


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description || !image) {
            return;
        }

        onSubmit({ _id: movie ? movie._id : null, title, description, image });
        setTitle('');
        setDescription('');
        setImage('');
    };


    const handleCancelEdit = () => {
        onCancelEdit();
    };

    return (
        <form className='flex flex-col flex-wrap justify-between items-center' onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <>
                {movie ? (
                    <div>
                        <button className='canbuttonClass' type="submit">Update Movie</button>
                        <button className='canbuttonClass' type="button" onClick={handleCancelEdit}>
                            Cancel
                        </button>
                    </div>
                ) : (
                    <button className='mt-4 addbuttonClass' type="submit">Add Movie</button>
                )}
            </>
        </form>
    );
};

export default MovieForm;
