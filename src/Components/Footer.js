import React from 'react';
import WatchFlix from '../Assets/WatchFlix.svg';
import { NavLink, useLocation } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='flex justify-between items-center bg-gray-900 custom-footer mt-12'>
            <div className='image-footer'>
                <NavLink exact to="/" activeClassName="active">
                    <img className="w-img" src={WatchFlix} alt="watchflix" />
                </NavLink>
            </div>
            <div className='flex flex-col footer mt-12 mb-12'>
                <h1>Connect Us</h1>
                <p>-About</p>
                <p>-Contact Us</p>
                <p>-Help Center</p>
                <p>-Career</p>
            </div>
            <div className='flex flex-col footer mt-12 mb-12'>
                <h1>Manage</h1>
                <p>-Account</p>
                <p>-Manage Account</p>
                <p>-Buy Gift Card</p>
                <p>-Redeem Gift Card</p>
            </div>
            <div className='flex flex-col footer information mt-12 mb-12'>
                <h1>Information</h1>
                <p>-Privacy</p>
                <p>-Terms & Condition</p>
                <p>-Cookies</p>
                <p>-FAQ</p>
            </div>
        </footer>
    );
};

export default Footer;
