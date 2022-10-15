import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';

export default function EventSearch() {
    return (
        <>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                style={{marginTop:"2%"}}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={10}>
                        <TextField style={{width:"95%"}} id="buscar_evento" label="Nome do evento ou classificação" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Button size="large" variant="contained">Buscar</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
