import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {

    const {user, error, isLogin, setUser, setIsLoding, signInUsingGoogle, handleEmailChange, handleRegistration, processLogin, 
        handlePasswordChange, toggleLogin} = useAuth();

        const location = useLocation();
        const history = useHistory();
        const redirect_uri = location.state?.from || '/servicedetails';
        const handleGoogleLogIn = () => {
            signInUsingGoogle()
            .then(result => {
              
                // const user = result.user;
                history.push(redirect_uri);
            })
        }


    return (
        <div className="login-form">
        <div>
        <h4>{error}</h4>
       <form onSubmit={handleRegistration}>
      <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'} </h3>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required/>
    </div>
  </div>
  
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Already Registered?
        </label>
      </div>
    </div>
  </div>
  <div className="text-danger">{error}</div>
  <button type="submit" className="btn btn-primary">{isLogin? 'Login' : 'Register'}</button>
  {/* <button onClick={handleResetPassword} type="button" className="btn btn-primary mx-3">Reset Password</button> */}
</form>
                <p>New to Good Health website? <Link to="/register">Create Account</Link></p>
                <div>-----------------or----------------</div>
                <button onClick={handleGoogleLogIn} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;