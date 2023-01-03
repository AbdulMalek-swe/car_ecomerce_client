// import { CircularProgress } from '@mui/material';
import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';
// import useAuth from './../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {isLoading, user } = useAuth();
    // if (isLoading) 
    // console.log(user,isLoading);
     if(isLoading){        
    return <CircularProgress /> 
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;