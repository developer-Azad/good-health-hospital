import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const {signInUsingGoogle, handleNameChange, handleRegistration, handleEmailChange, handlePasswordChange} = useAuth();
    return (
        <div className="login">
            <div>
                <h2>Please Register</h2>
                <form onSubmit={handleRegistration}>
                    <input className="input-field" onBlur={handleNameChange} type="text" name="" id=""
                     placeholder="Your Name" required />
                     <br /><br />
                    <input className="input-field" onBlur={handleEmailChange} type="email" name="" id=""
                     placeholder="Your Email" required/>
                     <br /><br />
                    <input className="input-field" onBlur={handlePasswordChange} type="password" name="" id=""
                     placeholder="password" required/>
                    <br />
                    <input className="btn btn-warning my-3" type="submit" value="Submit" />
                </form>
                <p>Already registerd? <Link className="link-color" style={{color:''}} to="/login">Login</Link></p>
                <div>-----------------or----------------</div>
                <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
                </div>
        </div>
    );
};

export default Register;