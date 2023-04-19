import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

type GridComponentType = {
    xs: number
    md: number
    elevation: number
    children: JSX.Element
}

export const GridComponent = ({xs, md, elevation,children}:GridComponentType) => {
    return <Grid item xs={xs} md={md}>
        <Paper style={paperStyle} elevation={elevation}>
            {children}
        </Paper>
    </Grid>

}

const paperStyle={
    padding: '5px',
    marginTop: '10px',
    minHeight: '300px',
    backgroundColor: '#fff',
}