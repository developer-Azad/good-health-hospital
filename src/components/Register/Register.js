import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const {error, signInUsingGoogle, handleRegistration, handleEmailChange, handlePasswordChange} = useFirebase();
    return (
        <div className="login-form">
            <div>
                <h2>Please Register</h2>
                <h3>{error}</h3>
                <form onSubmit={handleRegistration}>
                    <input onBlur={handleEmailChange} type="email" name="" id=""
                     placeholder="Your Email" />
                     <br />
                    <input onBlur={handlePasswordChange} type="password" name="" id=""
                     placeholder="password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already registerd? <Link to="/login">Login</Link></p>
                <div>-----------------or----------------</div>
                <button onClick={signInUsingGoogle} className="btn-regular">Google Sign In</button>
                </div>
        </div>
    );
};

export default Register;