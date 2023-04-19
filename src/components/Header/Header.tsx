import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Navigate, NavLink} from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import {useAppDispatch, useAppSelector} from "../../startProject/store";
import {authThunks} from "../../reducers/authReducer";

export const Header = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const status = useAppSelector(state=>state.initialization.status)

    if (!isLoggedIn) {
        return <Navigate to={'login'}/>
    }



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
                {isLoggedIn && <Button style={{color: 'black'}} onClick={() => dispatch(authThunks.logout())}>Logout</Button>}
            </Toolbar>
            {status === 'loading' && <LinearProgress/>}
        </AppBar>
    </Box>
}

