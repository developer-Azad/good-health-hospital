import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const {user, logOut} = useFirebase();
    return (
        <div className="navbar">
            <div>
            <Link to="/home">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/service">Services</Link>
            <Link to="/technology">Technology</Link>
            
            </div>
            {
                user.email ? 
                <button className="logOut-btn" onClick={logOut}> {user.displayName} Log Out</button>
                : <Link to="/login">Login </Link>
                }
            
        
    </div>

    );
};

export default Header;