import React from 'react';
import {useTranslation} from 'react-i18next';
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
    position: 'sticky',
    top: 0,
    [theme.breakpoints.down("sm")]: {
        height: '4vh',
        maxWidth: '100%'
    },
}));

const LogoBoxStyles = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '30%',
    // maxHeight: '7vh',
    [theme.breakpoints.down("sm")]: {
        width: 'auto',
    },
}));

const LinkBoxStyles = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '40%',
    [theme.breakpoints.down("sm")]: {
        width: 'auto',
        // marginRight: theme.spacing(1),
    }
}));

const LinkStyles = styled(Box)(({theme}) => ({
    margin: '0px 8px 0px 8px',
    [theme.breakpoints.down("sm")]: {
        fontSize: '1rem',
    },
}));

export const HeaderBar = () => {
    const navigate = useNavigate();
    const { t } = useTranslation("HeaderBar");

    const onClick = () => navigate('/')

    return (
        <HeaderStyles>
            <LogoBoxStyles onClick={onClick}>
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
                                viewTransitionName: isTransitioning ? "slide" : "",
                                textDecoration: "none",
                            };
                        }}
                    >
                        {t("ShowsLink")}
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
                                viewTransitionName: isTransitioning ? "slide" : "",
                                textDecoration: "none",
                            };
                        }}
                    >
                        {t("VenueLink")}
                    </NavLink>
                </LinkStyles>
                <LinkStyles>
                    <NavLink
                        to={`/about`}
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
                                viewTransitionName: isTransitioning ? "slide" : "",
                                textDecoration: "none",
                            };
                        }}
                    >
                        {t("AboutLink")}
                    </NavLink>
                </LinkStyles>
            </LinkBoxStyles>
        </HeaderStyles>
    );
};
