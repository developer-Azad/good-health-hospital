import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const {signInUsingGoogle, handleNameChange, handleRegistration, handleEmailChange, handlePasswordChange} = useAuth();
    return (
        <div className="login-form">
            <div>
                <h2>Please Register</h2>
                <form onSubmit={handleRegistration}>
                    <input onBlur={handleNameChange} type="text" name="" id=""
                     placeholder="Your Name" required />
                     <br />
                    <input onBlur={handleEmailChange} type="email" name="" id=""
                     placeholder="Your Email" required/>
                     <br />
                    <input onBlur={handlePasswordChange} type="password" name="" id=""
                     placeholder="password" required/>
                    <br />
                    <input className="btn btn-danger" type="submit" value="Submit" />
                </form>
                <p>Already registerd? <Link style={{color:''}} to="/login">Login</Link></p>
                <div>-----------------or----------------</div>
                <button onClick={signInUsingGoogle} className="btn btn-danger">Google Sign In</button>
                </div>
        </div>
    );
};

export default Register;