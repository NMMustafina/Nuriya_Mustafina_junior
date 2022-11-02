import React from 'react';
import {Outlet} from 'react-router-dom';
import {Container} from "@mui/material";
import AppToolbar from "../AppToolbar/AppToolbar";

const Layout = () => {
    return (
        <>
            <AppToolbar/>
            <Container sx={{my: 8}}>
                <Outlet/>
            </Container>
        </>
    );
};

export default Layout;