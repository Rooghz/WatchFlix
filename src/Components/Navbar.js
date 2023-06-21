import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import WatchFlix from '../Assets/WatchFlix.svg';
import { Search2Icon } from '@chakra-ui/icons';
import BellIcon from '../Assets/bellicon.svg';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');

    // Get the current location
    const location = useLocation();

    // Update the active link when the location changes
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <div className='flex flex-row justify-between items-center app-container'>
            <div>
                <NavLink exact to="/" activeClassName="active">
                    <img src={WatchFlix} alt="watchflix" />
                </NavLink>
            </div>
            <nav className="hidden md:flex space-x-14">
                <NavLink exact to="/" activeClassName="active" className="nav-link">
                    Movies
                    {activeLink === '/' && <div className="red-line" />}
                </NavLink>
                <NavLink to="/tv-series" activeClassName="active" className="nav-link">
                    TV Series
                    {activeLink === '/tv-series' && <div className="red-line" />}
                </NavLink>
                <NavLink to="/documentaries" activeClassName="active" className="nav-link">
                    Documentaries
                    {activeLink === '/documentaries' && <div className="red-line" />}
                </NavLink>
                <NavLink to="/categories" activeClassName="active" className="nav-link">
                    Categories
                    {activeLink === '/categories' && <div className="red-line" />}
                </NavLink>
                <NavLink to="/payment" activeClassName="active" className="nav-link">
                    Payment
                    {activeLink === '/payment' && <div className="red-line" />}
                </NavLink>
            </nav>
            <div className='flex'>
                <div className="flex space-x-8">
                    <Search2Icon className="mt-1" boxSize={5} />
                    <img className="bell" src={BellIcon} alt="BellIcon" />
                </div>
                <span className="ml-10">Sign up</span>
            </div>
        </div>
    );
};

export default Navbar;
