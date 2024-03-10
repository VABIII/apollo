import React, { useState } from 'react';
import {Box, Typography, makeStyles, Card, CardContent, TextField, CardActions, Button} from "@material-ui/core";
import {colors} from "../theme";
import { useTranslation } from "react-i18next";
import { userLoginCall } from "../modules/User";

const useStyles = makeStyles(theme => ({
    root: {
        background: colors.get("darkslategray"),
    },
    title: {
        color: colors.get('white'),
    },
    inputs: {
        margin: theme.spacing(2),
        color: colors.get('white')
    },
    outerBox: {
        background: theme.palette.backgroundColor,
        margin: theme.spacing(8),
        padding: theme.spacing(2),
        width: "75%",
        display: "flex",
        alignSelf: "center",
        flexDirection: "column",
        // justifyContent: "center",
        // borderRadius: theme.spacing()
    },
    innerBox: {
        background: "darkslategray",
        display: "flex",
        flexGrow: "1",
        justifyContent: "center"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%"
    }

}))

const initialFormValues = {
    username: '',
    password: '',
}


const Login = () => {
    const [values, setValues] = useState(initialFormValues);
    const classes = useStyles();
    console.log(values)
    const onChange = evt => {
        let name = evt.target.name;
        let value = evt.target.value;
        setValues({...values, [name]: value})
    }

    const onClick = () => {
        userLoginCall({password: values["password"],username: values["username"]})

        console.log("hello");

    }


    return (
        <Box className={classes.container}>
            <Card className={classes.root}>
                <CardContent className={classes.title}>
                    <Typography variant='h2'>Login into your account to get started!</Typography>
                    <Box>
                        <TextField onChange={onChange} className={classes.inputs} name={'username'} label='Username' ></TextField>
                        <TextField  onChange={onChange} className={classes.inputs} name={'password'} label='Password'  ></TextField>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button onClick={onClick}>Login</Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default Login;






































