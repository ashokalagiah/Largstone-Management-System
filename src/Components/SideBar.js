import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Toolbar from '@mui/material/Toolbar';

import { alpha, Avatar, Badge, Collapse, Drawer, Icon, InputBase } from '@mui/material';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import PrimarySearchAppBar from './NavBar/NavBar';
// import Sidebar from '../Asset/Json/Sidebar.json'
import sidebar from '../Asset/Json/Sidebar.json'




function ResponsiveDrawer(props) {

    const [open, setOpen] = React.useState(null);
    const [active, setActive] = React.useState(false);
    const [child, setChild] = React.useState(false);
    const drawerWidth = 260;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };



    const handle = (e) => {
        setActive(e)
    }

    const handlebar = (e) => {
        setChild(e)
    }

    const handleClick = (e) => {
        handle(e);
        setOpen((prev) =>
            ((prev == e) ? null : e))
    };
    const { window } = props;


    const drawer = (
        <div>
            <Toolbar />

            <List>
                {
                    sidebar.map((text, index) => {
                        return (
                            <List sx={{ marginLeft: "10px", overflowX: "hidden", overflowY: "hidden", padding: "0px", lineHeight: '40px' }}>
                                <Link to={text.path} style={{ textDecoration: 'none', color: 'black' }}>
                                    <ListItemButton style={{ color: index == active ? "#64c5b1" : "" }} key={index} onClick={() => handleClick(index)} >

                                        {/* <ListItemIcon sx={{ color: "#318dfe", minWidth: "0px", paddingRight: "10px" }}>
                                            <Icon sx={{ color: 'rgb(71, 177, 129)' }} className="material-icons-outlined">{text.icons}</Icon>
                                        </ListItemIcon> */}

                                        <ListItemText sx={{ color: '#144339' }} primary={text.title} />
                                        {/* {(open == index) ? <Icon className='material-icons-outlined' sx={{ color: '#a1a4b9', fontSize: '20px' }}>{text.arrow}</Icon> : <Icon className='material-icons-outlined' sx={{ color: '#a1a4b9', fontSize: '20px' }}>{text.arrowright}</Icon>} */}
                                    </ListItemButton>
                                </Link>

                                <Collapse in={(open == index)} timeout="auto" unmountOnExit>
                                    <List disablePadding>
                                        {
                                            text.child != false ? text.child.map((prop, ind) => {
                                                return (
                                                    <List disablePadding>
                                                        <Link to={prop.path} style={{ textDecoration: 'none', color: 'black' }}>
                                                            <ListItemButton sx={{ pl: '50px', m: 0 }} style={{ color: ind === child ? "#64c5b1" : "" }} onClick={() => handlebar(ind)} key={ind}>
                                                                <ListItemText primary={prop.title} sx={{ color: '#144339', fontFamily: "cursive" }} />
                                                            </ListItemButton>
                                                        </Link>
                                                    </List>
                                                )
                                            }) : ""
                                        }
                                    </List>
                                </Collapse>

                            </List>
                        )
                    })
                }
            </List>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar elevation={0}
                position="fixed"
                sx={{
                    borderBottom: '1px solid #e0e2e8',
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ background: '#fff', color: 'black', height: '100px' }} >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ marginRight: '170px', display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
            <Toolbar />
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;