import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter, Outlet,
    RouterProvider,
    BrowserRouter,
} from "react-router-dom";
import Home from './routes/Home';
import Root from './routes/Root.jsx';
import Venue from './routes/Venue.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import {colors} from "./theme.js";
import {HeaderBar} from "./components/HeaderBar.jsx";
import FooterBar from "./components/FooterBar.jsx";
import App from "./routes/App.jsx";


createRoot(document.getElementById('root')).render(

    <BrowserRouter basename="/chattanooga-live-music" >
        <Root />
    </BrowserRouter>
)
