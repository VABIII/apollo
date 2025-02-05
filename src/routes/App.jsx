// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Signal from './Signal.jsx';
import Walker from './Walker.jsx';
import Tivoli from "./Tivoli.jsx";
import Soldier from './Soldier.jsx';
import About from './About.jsx';
import theme from "../theme.js";
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import Venue from "./Venue.jsx";
import {HeaderBar} from "../components/HeaderBar.jsx";
import FooterBar from "../components/FooterBar.jsx";
import Caverns from "./Caverns.jsx";
import BarkingLegs from "./BarkingLegs.jsx";
import Barrelhouse from "./Barrelhouse.jsx";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HeaderBar/>
            <Routes>
                <Route index path="/" element={ <Home /> } />
                <Route index path='/about' element={ <About /> } />
                <Route index path="/venues/signal" element={ <Signal /> } />
                <Route index path="/venues/barkinglegs" element={ <BarkingLegs /> } />
                <Route index path="/venues/barrelhouse" element={ <Barrelhouse /> } />
                <Route index path="/venues/soldier" element={ <Soldier /> } />
                <Route index path="/venues/walker" element={ <Walker /> } />
                <Route index path="/venues/tivoli" element={ <Tivoli /> } />
                <Route index path="/venues/caverns" element={ <Caverns /> } />
                <Route path="venues" element={ <Venue /> } />
            </Routes>
            <FooterBar/>
        </ThemeProvider>
    );
};

export default App;
