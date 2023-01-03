

import { Container, Typography, TextField, CircularProgress, Alert,Button } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import login from '../../../images/login.svg'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';


const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const history = useHistory();
    const { user, userRegisterForm, isLoading, authError } = useAuth();



    const registerOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }
    const handleOnRegister = e => {
       
        userRegisterForm(registerData.email, registerData.password, registerData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleOnRegister}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={registerOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={registerOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={registerOnBlur}
                            variant="standard" />
                      

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                              <br />
                            <Button variant="text">Registered? Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;