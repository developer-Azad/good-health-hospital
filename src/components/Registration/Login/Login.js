import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

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
        <div className="login-form">
        <div>
            <h2>Please Login</h2>
            <form onSubmit={handleLogin}>
                <input onBlur={handleEmailChange} type="email" name="" id=""
                 placeholder="Your Email" required/>
                 <br />
                <input onBlur={handlePasswordChange} type="password" name="" id=""
                 placeholder="password" required/>
                <br />
                <input className="btn btn-danger" type="submit" value="Login" />
            </form>
            <p>New to Good Health? <Link to="/register">Registration</Link></p>
            <div>-----------------or----------------</div>
            <button onClick={handleGoogleSignIn} className="btn-regular">Google Sign In</button>
            </div>
    </div>
    );
};

export default Login;