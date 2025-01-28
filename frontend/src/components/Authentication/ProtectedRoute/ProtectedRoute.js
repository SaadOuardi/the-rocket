import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isLoggedIn = window.localStorage.getItem("loggedIn");
    return (
        <Route
            {...rest}
            render={(props) => 
                isLoggedIn === 'true' ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};

export default ProtectedRoute;