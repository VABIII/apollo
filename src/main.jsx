import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter, Outlet,
    RouterProvider,
    BrowserRouter,
} from "react-router-dom";
import Root from './routes/Root.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import './modules/i18n/index.jsx';
import './main.css'


createRoot(document.getElementById('root')).render(

    <BrowserRouter basename="/" >
        <Root style={{
            '&::-webkit-scrollbar': {
                display: 'none',
            }
        }}/>
    </BrowserRouter>
)
