import React from "react";
import {Box, Card, Container, Grid2, styled, Typography, Link} from "@mui/material";
import {colors} from "../../theme.js";

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

const EventsStyles = styled(Grid2)(({theme}) => ({
    display: "flex",
    flexGrow: 1,
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexWrap: "wrap",
    flexDirection: "row",
}));

const TitleStyles = styled(Typography)(({theme}) => ({
    color: colors.get("mandarin"),
    fontSize: '2.5rem',
    fontWeight: 500,
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
    textDecoration: 'none',
    ":hover": {
        fontColor: theme.palette.custom.main,
    }

}));


const VenueContainer = ({name, address1, address2, phoneNumber, venueLinkTitle, venueUrl, dirUrl, imgUrl, shows}) => {
    return (
        <VenueContainerStyles>
            <VenueTitleContainerStyles>
                <VenueTitleStyles variant='h2' >{name}</VenueTitleStyles>
            </VenueTitleContainerStyles>
            <EventsStyles container spacing={2} sx={{ p: 4 }}>
                <EventCard size={6} hoverShadow={10} >
                    <VenueLogoStyles component='img' src={window.location.origin +  imgUrl} alt='event image' />
                    <EventDetailsStyles container spacing={2} >
                        <Grid2 size={12}>
                            <EventLinkStyles href={venueUrl} target="_blank" rel="noopener noreferrer" >{venueLinkTitle}</EventLinkStyles>
                        </Grid2>
                        <Grid2 size={4}>
                            <VenueAddressStyles variant='h6' >{phoneNumber}</VenueAddressStyles>
                        </Grid2>
                        <Grid2 size={12}>
                            <AddressLinkStyles target="_blank" rel="noopener noreferrer" href={dirUrl}>
                                <VenueAddressStyles variant='h6' >{address1}</VenueAddressStyles>
                                <VenueAddressStyles variant='h6' >{address2}</VenueAddressStyles>
                            </AddressLinkStyles>
                        </Grid2>
                    </EventDetailsStyles>
                </EventCard>
                { shows.map(({eventVenue, eventArtist, eventDate, eventLink, eventTime, eventImgSrc}, idx) => (
                    <EventCard key={idx} size={6}  id={idx} hoverShadow={10}>
                        <EventImgStyles component='img' src={eventImgSrc} alt='event image' />
                        <TitleStyles variant='h4' >{eventArtist.replace(" — The Signal", "")}</TitleStyles>
                        <EventDetailsStyles container spacing={2} >
                            <Grid2 size={12}>
                                <EventLinkStyles href={eventLink} target="_blank" rel="noopener noreferrer" >Get Tickets</EventLinkStyles>
                            </Grid2>
                            <Grid2 size={6}>
                                <EventTextStyles variant='h6' >{`${eventDate}`}</EventTextStyles>
                            </Grid2>
                            <Grid2 size={4}>
                                <EventTextStyles variant='h6' >{eventTime}</EventTextStyles>
                            </Grid2>
                            <Grid2 size={12}>
                                <EventTextStyles variant='h6' >{eventVenue}</EventTextStyles>
                            </Grid2>
                        </EventDetailsStyles>
                    </EventCard>
                ))}
            </EventsStyles>
        </VenueContainerStyles>
    );
};


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
    VenueContainer,
}













































