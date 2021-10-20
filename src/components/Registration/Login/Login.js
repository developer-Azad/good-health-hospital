import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {user, email, password, signInUsingGoogle, handleLogin, handleEmailChange, handlePasswordChange} = useAuth();
   const location = useLocation();
   const redirect_uri = location?.state?.from || '/';
   const history = useHistory();
   const [err, setErr] = useState();
   const [error, setError] = useState();

   const handleGoogleSignIn = () => {
       signInUsingGoogle()
       .then(result => {
           history.push(redirect_uri);
       })
   }
   
   const handleEmailSignIn = (event) => {
       handleLogin(event)
       .then(result => {
           history.push(redirect_uri);
       })
       .catch(error => {
        setErr('kalam');
    });

       if(email !== user.email){
        setError('Email not fount')
        return;
       }
   }

    return (
        <div className="login">
        <div>
            <h3>{error}</h3>
            <h2>Please Login</h2>
            <form onSubmit={handleEmailSignIn}>
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