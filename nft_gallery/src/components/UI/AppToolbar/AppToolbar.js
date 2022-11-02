import React from 'react';
import {Link} from "react-router-dom";
import {makeStyles} from "tss-react/mui";
import {AppBar, Container, Grid, Toolbar, Typography} from "@mui/material";
import {AutoAwesome} from "@mui/icons-material";

const useStyles = makeStyles()(() => ({
    logo: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center'
    },
    mainLink: {
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
            color: 'inherit'
        },
        fontWeight: 300,
        letterSpacing: '.2rem',
        textTransform: 'uppercase',
    }
}));

const AppToolbar = () => {
    const {classes} = useStyles();

    return (
        <AppBar position="sticky" sx={{p: 2}}>
            <Container>
                <Toolbar>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item className={classes.logo}>
                            <AutoAwesome/>
                            <Typography variant="h6" sx={{ml: 2}}>
                                <Link to="/" className={classes.mainLink}>
                                    NFT Gallery
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default AppToolbar;