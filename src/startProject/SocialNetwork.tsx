import React from 'react';
import './SocialNetwork.css';
import {RoutesMenu} from "../components/Routes/RoutesMenu";
import {Header} from "../components/Header/Header";
import Grid from "@mui/material/Grid";
import {GridComponent} from "../components/Body/GridComponent";
import {Navbar} from "../components/Nav/Navbar";
import Container from "@mui/material/Container";

export const SocialNetwork = () => {
    return <div className={'app-wrapper'}>
        <Header/>
        <Container>
            <Grid container spacing={4}>
                <GridComponent xs={4} md={2} elevation={16} children={<Navbar/>}/>
                <GridComponent xs={6} md={8} elevation={16} children={<RoutesMenu/>}/>
            </Grid>
        </Container>
    </div>
}

