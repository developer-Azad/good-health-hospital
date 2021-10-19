import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (

            <div className="navbar">
            <div className="header-icon">
               <Link to="/home"> <img width="30px" src="https://image.shutterstock.com/image-vector/plus-circle-icon-flat-vector-260nw-1644009955.jpg" alt="" />
                <h3>Good Health</h3> </Link>
            </div>
            
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