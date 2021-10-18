import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Redirect, Route } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = ({children, ...rest}) => {
    const {user} = useAuth();
    return (
        <Route
        {...rest}
        render = {({location}) => user.email? children: <Redirect 
        to={{
            pathname: "/login",
            state: {from: location}
        }}></Redirect>
    }
        ></Route>
    );
};

export default PrivateRoute;