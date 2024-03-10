import React, { useState } from 'react';
import {Box, Typography, makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import Login from "./Login";

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: "#303030",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
        margin: theme.spacing(2),
        padding: theme.spacing(4),
        border: "green 1px solid"
    },
    imageBox: {
        maxWidth: "100%",
        border: "blue 1px solid"

    },
    image: {
        maxWidth: "100%"
    },
    titleBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "white 1px solid",
        width: "100%"
    },
    title: {
        width: "75%",
        border: "red 1px solid"
    },
    otherBox: {
        maxWidth: "",
        border: "orange 1px solid",
        padding: theme.spacing(2)
    },
    link: {
        textDecoration: "none",
        color: "#FFFFFF"
    }
}))


const Home = () => {
    const [showLogin, toggleShowLogin] = useState(false);
    const classes = useStyles();

    const loginOnClick = () => toggleShowLogin(!showLogin);

    return (
        <Box className={classes.container}>
            {
                showLogin && <Login/>
            }
            <Box className={classes.titleBox}>
                <Box className={classes.otherBox}>
                    <Box className={classes.title}>
                       <Link onClick={loginOnClick} className={classes.link}>
                            <Typography variant="h1" >My Routine</Typography>
                       </Link>
                    </Box>
                <Box className={classes.imageBox}>
                    <img className={classes.image}
                    src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                    alt="woman lifting weights"
                    />
                </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;