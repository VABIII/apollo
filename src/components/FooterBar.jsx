import React from 'react';
import {Box, styled, Link, Typography} from "@mui/material";
import {colors} from "../theme.js";


const FooterStyles = styled(Box)(({theme}) => ({
    display: "flex",
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    height: '12vh',
    fontSize: '2rem',
    color: colors.get("nightMoon"),
    marginTop: theme.spacing(4),
    textAlign: 'center',
    // backgroundColor: colors.get("nightMoon"),
    // position: 'fixed',
    bottom: 0,
    // left: '50%',
// -webkit-transform: translate(-50%, 0);
//     transform: 'translate(-50%, 0)',
    // width: '100%',
}));

const LogoContainerStyles = styled(Box)(({theme}) => ({
    // display: "flex",
    // flexGrow: 1,
    // alignItems: "center",
    // justifyContent: "space-around",
    // flexWrap: "wrap",
    // flexDirection: "row",
    // maxWidth: '100%',
    // maxHeight: '20vh',
}));


const LinkStyles = styled(Link)(({theme}) => ({
    padding: theme.spacing(2),
    color: colors.get("nightMoon"),
    fontSize: '1.5rem',
    [theme.breakpoints.down("sm")]: {
        fontSize: '1rem',
        padding: theme.spacing(1),
    }
}));

const TMStyles = styled(Typography)(({theme}) => ({
    fontSize:'1rem',
    color:'gray',
    [theme.breakpoints.down("sm")]: {
        fontSize: '.75rem',
    }

}));






const FooterBar = () => {

    const onClick = (name) => {

    }


    return (
        <div>
            <FooterStyles>
                <LogoContainerStyles >
                    <Box>
                        <LinkStyles href=''>Terms of Use</LinkStyles>
                        <LinkStyles href=''>Privacy Policy</LinkStyles>
                    </Box>
                    <TMStyles > © 2025 Chattanooga Live Music. All rights reserved.</TMStyles>
                </LogoContainerStyles>
            </FooterStyles>

        </div>
    );
};

export default FooterBar;