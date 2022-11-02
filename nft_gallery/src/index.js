import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import App from "./App";
import './index.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3C948B'
        }
    },
    typography: {
        h2: {
            fontSize: '3rem',
            textTransform: 'capitalize'
        }
    },
});

const app = (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
