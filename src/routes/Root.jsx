import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme, {colors} from '../theme.js';
import App from './App.jsx';
import '../root.css'
import EventsProvider from "../modules/Events";


const Root = () => {
    return (
        <EventsProvider>
            <App />
        </EventsProvider>
    );
};

export default Root;




















