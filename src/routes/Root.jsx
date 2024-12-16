import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme, {colors} from '../theme.js';
import App from './App.jsx';
import Home from './Home.jsx';
import {CssBaseline} from "@mui/material";
import EventsProvider from "../modules/Events";
import Venue from "./Venue.jsx";


const Root = () => {
    return (
        <EventsProvider>
            <App />
        </EventsProvider>
    );
};

export default Root;




















