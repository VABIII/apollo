import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home.jsx';
import theme from "../theme.js";
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import Venue from "./Venue.jsx";
import {HeaderBar} from "../components/HeaderBar.jsx";
import FooterBar from "../components/FooterBar.jsx";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HeaderBar/>
            <Routes>
                <Route index path="/" element={ <Home /> } />
                <Route index path="/venues" element={ <Venue /> } />
            </Routes>
            <FooterBar/>
        </ThemeProvider>
    );
};

export default App;
