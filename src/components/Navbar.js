import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { NavLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';


function Navbar() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Drawer
                variant="permanent"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
                }}
            >
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItemButton component={NavLink} to="/home">
                            <ListItemText primary="E-Commerce Dashboard" />
                        </ListItemButton>
                    </List>
                    <Divider />
                    <List>
                        <ListItemButton component={NavLink} to="/dashboard">
                            <ListItemText secondary="Dashboard" />
                        </ListItemButton>
                        <ListItemButton component={NavLink} to="/map">
                            <ListItemText secondary="Map" />
                        </ListItemButton>
                        <ListItemButton component={NavLink} to="/salesgraph">
                            <ListItemText secondary="Salesgraph" />
                        </ListItemButton>
                        <ListItemButton component={NavLink} to="/products">
                            <ListItemText secondary="Products" />
                        </ListItemButton>
                        <ListItemButton component={NavLink} to="/customer">
                            <ListItemText secondary="Customer" />
                        </ListItemButton>
                        <Divider />
                    </List>
                </Box>
            </Drawer>
        </React.Fragment>
    );
}
export default Navbar;