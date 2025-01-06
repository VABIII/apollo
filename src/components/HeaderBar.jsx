import React from 'react';
import {Box, styled} from '@mui/material';
import {NavLink, useNavigate} from 'react-router-dom';
import {colors} from "../theme.js";


const HeaderStyles = styled(Box)(({theme}) => ({
    display: "flex",
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    height: '8vh',
    fontSize: '1.5rem',
    backgroundColor: colors.get("nightMoon"),
    color: colors.get("nightMoon"),
    position: 'sticky',
    top: 0,
    [theme.breakpoints.down("sm")]: {
        // paddingTop: theme.spacing(4),
        height: '7vh',
    }
}))

const LogoBoxStyles = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '30%',
    maxHeight: '7vh',
    [theme.breakpoints.down("sm")]: {
        // paddingTop: theme.spacing(4),
        width: '50%',
        // marginLeft: theme.spacing(2),
        maxHeight: '6vh'
    }
}));

const LinkBoxStyles = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '40%',
    [theme.breakpoints.down("sm")]: {
        // paddingTop: theme.spacing(4),
        width: '60%',
        marginRight: theme.spacing(1),

    }
}));

const LinkStyles = styled(Box)(({theme}) => ({
    [theme.breakpoints.down("sm")]: {

    }

}))

// const boxStyles = {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     width: '30%',
//     maxHeight: '7vh',
//     [theme.breakpoints.down("sm")]: {
//         // paddingTop: theme.spacing(4),
//         width: '100%',
//         marginLeft: '24px',
//     }
// }
//
// const linkBoxStyles = {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '40%',
//     [theme.breakpoints.down("sm")]: {
//         // paddingTop: theme.spacing(4),
//     }
// }


export const HeaderBar = () => {
    const navigate = useNavigate();

    const onClick = () => navigate('/')

    return (
        <HeaderStyles>
            <LogoBoxStyles onClick={onClick}>
                <Box component="img" src={'clm_logo_xxsm_no_bg.png'}  />
            </LogoBoxStyles>
            <LinkBoxStyles >
                <LinkStyles>
                    <NavLink
                        to={`/`}
                        textDecoration='none'
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                    ? "pending"
                                    : ""
                        }
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "white",
                                // color: isPending ? "red" : colors.get("nightMoon"),
                                viewTransitionName: isTransitioning ? "slide" : "",
                                textDecoration: "none",
                            };
                        }}
                    >
                        Shows
                    </NavLink>
                </LinkStyles>
                <LinkStyles>
                    <NavLink
                        to={`/venues`}
                        textDecoration='none'
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                    ? "pending"
                                    : ""
                        }
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "white",
                                // color: isPending ? "red" : colors.get("nightMoon"),
                                viewTransitionName: isTransitioning ? "slide" : "",
                                textDecoration: "none",
                            };
                        }}
                    >
                        Venues
                    </NavLink>
                </LinkStyles>
                <LinkStyles>
                    <NavLink
                        to={`/events`}
                        textDecoration='none'
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                    ? "pending"
                                    : ""
                        }
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "white",
                                // color: isPending ? "red" : colors.get("nightMoon"),
                                viewTransitionName: isTransitioning ? "slide" : "",
                                textDecoration: "none",
                            };
                        }}
                    >
                        About
                    </NavLink>
                </LinkStyles>
            </LinkBoxStyles>
        </HeaderStyles>
    );
};
