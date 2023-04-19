import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

export const Header = () => {

    return  <Box sx={{ flexGrow: 1}}>
        <AppBar position="static"  style={{backgroundColor: 'whitesmoke'}} >
            <Toolbar  style={{justifyContent: 'space-around'}}>
                <div>
                    <NavLink to={'/'}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{color: 'black'}} >
                            Super Social Network
                        </Typography>
                    </NavLink>
                </div>
                <Button  style={{color: 'black'}}>Logout</Button>
            </Toolbar>
            <LinearProgress/>
        </AppBar>
    </Box>
}

