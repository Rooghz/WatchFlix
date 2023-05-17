import React from 'react';
import { Link } from 'react-router-dom';
import WatchFlix from '../Assets/WatchFlix.svg'

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src={WatchFlix} alt="watchflix" />
            </div>
            <nav>
                <Link to="/">Movies</Link>
                <Link to="/tv-series">TV Series</Link>
                <Link to="/documentaries">Documentaries</Link>
                <Link to="/categories">Categories</Link>
            </nav>
            <div>
                <span>Sign up</span>
            </div>
        </nav>
    );
};

export default Navbar;
