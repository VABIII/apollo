import Home from "./components/Home";
import Login from "./components/Login";
import React from "react";
import { Route, Routes }from 'react-router-dom';
import {Box, makeStyles} from "@material-ui/core";
import { colors } from "./theme";

const useStyles = makeStyles(theme => ({
    app: {
        backgroundColor: colors.get("background"),
        // backgroundColor: theme.palette.primary,
        height: "100vh"


    }
}));

function App() {
    const classes = useStyles();

  return (
    <Box className={classes.app}>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
    </Box>
  );
}

export default App;
