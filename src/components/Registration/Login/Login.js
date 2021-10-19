import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle, handleLogin, handleEmailChange, handlePasswordChange} = useAuth();
   const location = useLocation();
   const redirect_uri = location?.state?.from || '/';
   const history = useHistory();

   const handleGoogleSignIn = () => {
       signInUsingGoogle()
       .then(result => {
           history.push(redirect_uri);
       })
   }
   
    return (
        <div className="login">
        <div>
            <h2>Please Login</h2>
            <form onSubmit={handleLogin}>
                <input className="input-field" onBlur={handleEmailChange} type="email" name="" id=""
                 placeholder="Your Email" required/>
                 <br /><br />
                <input className="input-field" onBlur={handlePasswordChange} type="password" name="" id=""
                 placeholder="password" required/>
                <br />
                <input className="btn btn-warning my-3" type="submit" value="Login" />
            </form>
            <p>New to Good Health? <Link className="link-color" to="/register">Registration</Link></p>
            <div>-----------------or----------------</div>
            <button onClick={handleGoogleSignIn} className="btn btn-warning">Google Sign In</button>
            </div>
    </div>
    );
};

export default Login;