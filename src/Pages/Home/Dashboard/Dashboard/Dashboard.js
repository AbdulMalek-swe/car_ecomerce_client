import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import useAuth from '../../../../hooks/useAuth';

import Payment from '../Payment/Payment';
import Allproduct from '../Allproduct/Allproduct';
import Addproduct from '../Addproduct/Addproduct';
import Admin from '../Admin/Admin';
import Myorders from '../../MyOrder/Myorders/Myorders';
import Review from '../Review/Review';
const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const [date, setDate] = React.useState(new Date())
    const {user,admin,userLogOut} = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (

        <div>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none', color: 'green' }}  to="/home"><Button color="inherit">Home</Button></Link>
            <Link style={{ textDecoration: 'none', color: 'green' }}  to={`${url}`}><Button color="inherit">DashboardHome</Button></Link>
            <Link style={{ textDecoration: 'none', color: 'green' }}  to={`${url}/Payment`}><Button color="inherit">payment</Button></Link>
            <br />
            <Link style={{ textDecoration: 'none', color: 'green' }}  to={`${url}/myorders`}><Button color="inherit">myorders</Button></Link>
            <br />
            <Link style={{ textDecoration: 'none', color: 'green' }}  to={`${url}/review`}><Button color="inherit">review</Button></Link>
            <br />
           
          

            {
                admin &&  <Box>
                     <Link style={{ textDecoration: 'none', color: 'green' }}  to={`${url}/admin`}><Button color="inherit">Admin</Button></Link> <br/>
                <Link style={{ textDecoration: 'none', color: 'green' }}  to={`${url}/allproduct`}><Button color="inherit">Allproduct</Button></Link>
                <br/>
            <Link style={{ textDecoration: 'none', color: 'green' }}  to={`${url}/addproduct`}><Button color="inherit">Addproduct</Button></Link> <br />
                </Box>
            }
       <Button style={{ textDecoration: 'none', color: 'blue' }} onClick={userLogOut} color="inherit">Logout</Button>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
        <Route exact path={path}>
         <DashboardHome></DashboardHome>
        </Route>
        <Route path={`${path}/payment/:id`}>
            <Payment></Payment>
        </Route>
        <Route path={`${path}/myorders`}>
           <Myorders></Myorders>
        </Route>
        
        <Route path={`${path}/Allproduct`}>
            <Allproduct></Allproduct>
        </Route>
        <Route path={`${path}/addproduct`}>
            <Addproduct></Addproduct>
        </Route>
        <Route path={`${path}/admin`}>
            <Admin></Admin>
        </Route>
        <Route path={`${path}/review`}>
            <Review></Review>
        </Route>
        {/* <Route path={`${path}/MakeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/addDoctor`}>
            <AddDoctor></AddDoctor>
        </Route> */}
      </Switch>
                   
              
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
