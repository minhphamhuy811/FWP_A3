import React from 'react';
import { Route, Redirect } from 'react-router-dom';
function PrivateRoute({ children, ...rest }) {
    const token = sessionStorage.getItem('token');
    console.log(token)
    return (
        <Route
            {...rest}
            render={() => (token ? children : <Redirect to={{ path: '/' }} />)}
        />
    );
}
export default PrivateRoute;