import React from 'react';
import ReactDOM from 'react-dom/client';
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import picturesReducer from "./store/reducers/picturesReducer";
import App from "./App";
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    picturesReducer,
    composeEnhancers(applyMiddleware(thunk))
);

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
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
