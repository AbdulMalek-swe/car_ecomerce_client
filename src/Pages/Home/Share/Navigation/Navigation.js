import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Navigation = () => {
  const {user ,  userLogOut} = useAuth();
    return (
        <div>


<Box sx={{ flexGrow: 1  }}>
            <AppBar position="static" sx={{  background:"#382d2d5d" }}>
                <Toolbar> 
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/Home"><Button color="inherit">Home</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/products"><Button color="inherit">service</Button></Link>
                   
      {
        user?.email ?
            <Box>
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                    <Button color="inherit">Dashboard</Button>
                </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/Complain">
                    <Button color="inherit">Contact</Button>
                </NavLink>
                {/* <Link style={{ textDecoration: 'none', color: 'white' }} to="/myorders"><Button color="inherit">myOrders</Button></Link> */}
                <Button style={{ textDecoration: 'none', color: 'white' }} onClick={userLogOut} color="inherit">Logout</Button>
                <Button style={{ textDecoration: 'none', color: 'white' }}>{user.displayName}</Button>
            </Box>
            :
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                <Button color="inherit">Login</Button>
            </NavLink>
    }
        
         </Toolbar>
            </AppBar>
        </Box> 
      
   
        </div>
    );
};

export default Navigation;