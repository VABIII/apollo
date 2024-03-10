import React from 'react';
import { Link } from 'react-router-dom'
import {
    Box,
    Toolbar,
    Typography,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container2: {
        width: "100%",
        // margin: theme.spacing(2),
        display: "flex",
        justifyContent: "center",
    },
}));



const Header = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container2}>
            OYY!!!!
        </Box>
    );
};

export default Header;






































