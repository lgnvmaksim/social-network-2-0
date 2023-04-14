import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {GridComponent} from "./GridComponent";
import {Navbar} from "../Nav/Navbar";
import {MainBlock} from "../MainBlock/MainBlock";
import {RoutesComponent} from "../Routes/RoutesComponent";

export const Body = () => {
    return <Container>
        <Grid container spacing={4}>
            <GridComponent xs={4} md={2} elevation={16} children={<Navbar/>}/>
            <GridComponent xs={6} md={8} elevation={16} children={<MainBlock/>}/>
        </Grid>
    </Container>

}

