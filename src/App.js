import Home from "./components/Home";
import Header from "./components/Header";
import React, { useEffect, useState, useContext } from "react";
import { Route, Routes }from 'react-router-dom';
import {Box, makeStyles} from "@material-ui/core";
import { colors } from "./theme";

const useStyles = makeStyles(theme => ({
    app: {
        backgroundColor: colors.get("background"),
        height: "100vh"


    }
}));

function App() {
    const classes = useStyles();

  return (
    <Box className={classes.app}>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </Box>
  );
}

export default App;
