import React from 'react';
import {
    EventsStyles,
    EventStyles,
    ImgStyles,
    LinkStyles,
    TextStyles,
    TitleStyles
} from "../components/styledComponents/index.jsx";
import {Box, Card, styled, Typography} from "@mui/material";
import {testData} from "../modules/TestData.js";
import {colors} from "../theme.js";
import {Link} from "react-router-dom";

const SignalContainerStyles = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
    height: "100vh",
    minHeight: 'calc(100vh - 170px)',
    // backgroundColor: colors.get("nightMoon")
    [theme.breakpoints.down("sm")]: {
        // width: "100%"
        justifyContent: "flex-start",
    }
}));


const EventCard = styled(Card)(({theme}) => ({
    // width: "100%",
    display: "flex",
    flexDirection: "column",
    width:"33%",
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(4),
    boxShadow: theme.shadows[5],
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        justifyContent: "flex-start",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}))

const EventImgStyles = styled(Box)(({theme}) => ({
    maxWidth: '100%',
    borderRadius: 10,
    marginBottom: theme.spacing(2),
}));

const EventTextStyles = styled(Typography)(({theme}) => ({
    // color: colors.get("nightMoon"),
    color: colors.get("darkGrey2"),
    fontSize: '2.25rem',
    // padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        paddingBottom: 0,
        fontSize: '1rem',
    }
}));

const EventLinkStyles = styled(Link)(({theme}) => ({
    textDecoration: 'none',
    // color: colors.get("deepBlue"),
    color: theme.palette.text.secondary,
}));


const Tivoli = () => {
const shows = testData.filter((evt) => evt.eventVenue === "The Signal");


    return (
        <SignalContainerStyles>
            <EventsStyles container spacing={2} sx={{ p: 4 }}>
                <EventsStyles container spacing={2} size={5}>
                    { shows.map(({eventVenue, eventArtist, eventDate, eventLink, eventTime, eventImgSrc}, idx) => (
                        <EventCard key={idx} size={6}  id={idx}>
                            <EventImgStyles component='img' src={eventImgSrc} alt='event image' />
                            <TitleStyles variant='h4' >{eventArtist.replace(" — The Signal", "")}</TitleStyles>
                            <EventTextStyles variant='h6' >{eventVenue}</EventTextStyles>
                            <EventTextStyles variant='h6' >{eventDate}</EventTextStyles>
                            <EventTextStyles variant='h6' >{eventTime}</EventTextStyles>
                            <EventLinkStyles to={eventLink} target="_blank" rel="noopener noreferrer" >Get Tickets</EventLinkStyles>
                        </EventCard>
                    ))
                    }
                </EventsStyles>
            </EventsStyles>
        </SignalContainerStyles>
    );
};

export default Tivoli;