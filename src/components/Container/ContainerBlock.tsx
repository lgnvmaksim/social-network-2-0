import React from 'react';
import Grid from "@mui/material/Grid";
import {GridComponent} from "./GridComponent";
import {Navbar} from "../Nav/Navbar";
import {RoutesMenu} from "../Routes/RoutesMenu";
import {useAppSelector} from "../../startProject/store";
import Container from "@mui/material/Container";

export const ContainerBlock = () => {
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)



    return <Container>
        <Grid container spacing={4}>
            {isLoggedIn && < GridComponent xs={4} md={2} elevation={16} children={<Navbar/>}/>}
            <GridComponent xs={6} md={8} elevation={16} children={<RoutesMenu/>}/>
        </Grid>
    </Container>
}