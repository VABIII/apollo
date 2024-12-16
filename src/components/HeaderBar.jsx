import React from 'react';
import {Box, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';
import {colors} from "../theme.js";


const HeaderStyles = styled(Box)(({theme}) => ({
    display: "flex",
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center",
    height: '5vh',
    fontSize: '2rem',
    color: colors.get("nightMoon"),
}))


export const HeaderBar = () => {
    return (
        <HeaderStyles>
            <Box>
                <NavLink
                    to={`/today`}
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
                            color: isPending ? "red" : colors.get("nightMoon"),
                            viewTransitionName: isTransitioning ? "slide" : "",
                            textDecoration: "none",
                        };
                    }}
                >
                    Home
                </NavLink>
            </Box>
            <Box>
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
                            color: isPending ? "red" : colors.get("nightMoon"),
                            viewTransitionName: isTransitioning ? "slide" : "",
                            textDecoration: "none",
                        };
                    }}
                >
                    Venues
                </NavLink>
            </Box>
            <Box>
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
                            color: isPending ? "red" : colors.get("nightMoon"),
                            viewTransitionName: isTransitioning ? "slide" : "",
                            textDecoration: "none",
                        };
                    }}
                >
                    About
                </NavLink>
            </Box>
        </HeaderStyles>
    );
};
