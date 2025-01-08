import {Box, Card, Container, Grid2, styled, Typography, Link} from "@mui/material";
import {colors} from "../../theme.js";
// import {Link} from "react-router-dom";

const options = {
    shouldForwardProp: (prop) => prop !== 'hoverShadow',
};

const VenueContainerStyles = styled(Container)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        justifyContent: "flex-start",
    },
}));


const EventCard = styled(Card, options)(({theme, hoverShadow = 1}) => ({
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(4),
    boxShadow: theme.shadows[3],
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        justifyContent: "flex-start",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    ':hover': {
        boxShadow: theme.shadows[hoverShadow],
    },
}));

const EventImgStyles = styled(Box)(({theme}) => ({
    maxWidth: '100%',
    borderRadius: 10,
    marginBottom: theme.spacing(2),
}));

const EventTextStyles = styled(Typography)(({theme}) => ({
    color: colors.get("darkGrey2"),
    fontSize: '2.25rem',
    // padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        paddingBottom: 0,
        fontSize: '1rem',
    },
}));

const EventLinkStyles = styled(Link)(({theme}) => ({
    textDecoration: 'none',
    // color: colors.get("deepBlue"),
    color: theme.palette.text.secondary,
    fontSize: '2rem',
    fontWeight: 'bold',
    [theme.breakpoints.down("sm")]: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
    },
}));

const EventDetailsStyles = styled(Grid2)(({theme}) => ({
    [theme.breakpoints.down("sm")]: {
    },
}));

const VenueLogoStyles = styled(Box)(({theme}) => ({
    maxWidth: "100%",
    borderRadius: theme.spacing(2),
    margin: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        margin: 0,
        marginBottom: theme.spacing(1),
        borderRadius: theme.spacing(1),
    },
}));

const VenueTitleContainerStyles = styled(Container)(({theme}) => ({
    maxWidth: '100%',
    paddingTop: theme.spacing(3),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        margin: 0,
        padding: 0,
        paddingTop: theme.spacing(3),
    },
}));

const VenueTitleStyles = styled(Typography)(({theme}) => ({
    color: theme.palette.custom.dark,
    fontWeight: 'bold',
    marginLeft: theme.spacing(4)
}));

const VenueAddressStyles = styled(Typography)(({theme}) => ({
    color: colors.get("darkGrey2"),
    fontSize: '1.5rem',
    [theme.breakpoints.down("sm")]: {
        paddingBottom: 0,
        fontSize: '1rem',
    },
}));

const AddressLinkStyles = styled(Link)(({theme}) => ({
    // textDecoration: 'none',
    ":hover": {
        // transition:  'translate(-4px ,8px) scale(1)',
        transform: 'scale(4)',
        textDecoration: 'underLine',
    }

    }));



export {
    VenueContainerStyles,
    EventCard,
    EventImgStyles,
    EventTextStyles,
    EventLinkStyles,
    EventDetailsStyles,
    VenueLogoStyles,
    VenueTitleContainerStyles,
    VenueTitleStyles,
    VenueAddressStyles,
    AddressLinkStyles,
}













































