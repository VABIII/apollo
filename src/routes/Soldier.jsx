import React from 'react';
import { testData } from "../modules/TestData.js";
import {Box, Card, Container, Grid2, styled, Typography} from "@mui/material";
import {
    EventsStyles,
    EventStyles,
    ImgStyles,
    LinkStyles,
    TextStyles,
    TitleStyles
} from "../components/styledComponents/index.jsx";
import {colors} from "../theme.js";
import {Link} from "react-router-dom";

const SignalContainerStyles = styled(Container)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
    // height: "100vh",
    // minHeight: 'calc(100vh - 170px)',
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
    // width:"33%",
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
    fontSize: '2rem',
    fontWeight: 'bold',
    [theme.breakpoints.down("sm")]: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
    }
}));

const EventDetailsStyles = styled(Grid2)(({theme}) => ({

    [theme.breakpoints.down("sm")]: {
        // justifyContent: 'center'
    }

}));

const VenueLogoContainerStyles = styled(Container)(({theme}) => ({
    maxWidth: '100%',
}));

const VenueLogoStyles = styled(Box)(({theme}) => ({
    maxWidth: "100%",
    marginTop: theme.spacing(4),
    borderRadius: theme.spacing(4),
}))

const VenueTitleStyles = styled(Typography)(({theme}) => ({
    color: theme.palette.custom.dark,
    fontWeight: 'bold',
}));



const Soldier = () => {
    const shows = testData.filter((evt) => evt.eventVenue === "Soldiers and Sailors Memorial Auditorium");

    return (
        <SignalContainerStyles>
            <VenueLogoContainerStyles>
                <VenueLogoStyles component='img' src='/soldiers_logo_w_bg_md.png'/>
                {/*<VenueTitleStyles variant='h1'>*/}
                {/*    The Signal*/}
                {/*</VenueTitleStyles>*/}
            </VenueLogoContainerStyles>
            <EventsStyles container spacing={2} sx={{ p: 4 }}>
                { shows.map(({eventVenue, eventArtist, eventDate, eventLink, eventTime, eventImgSrc}, idx) => (
                    <EventCard key={idx} size={6}  id={idx}>
                        <EventImgStyles component='img' src={eventImgSrc} alt='event image' />
                        <TitleStyles variant='h4' >{eventArtist.replace(" — The Signal", "")}</TitleStyles>
                        <EventDetailsStyles container spacing={2} >
                            <Grid2 size={12}>
                                <EventLinkStyles to={eventLink} target="_blank" rel="noopener noreferrer" >Get Tickets</EventLinkStyles>
                            </Grid2>
                            <Grid2 size={12}>
                                <EventTextStyles variant='h6' >{eventVenue}</EventTextStyles>
                            </Grid2>
                            <Grid2 size={8}>
                                <EventTextStyles variant='h6' >{eventDate}</EventTextStyles>
                            </Grid2>
                            <Grid2 size={4}>
                                <EventTextStyles variant='h6' >{eventTime}</EventTextStyles>
                            </Grid2>
                            {/*<EventTextStyles variant='h6' >{eventTime}</EventTextStyles>*/}
                            {/*<EventLinkStyles to={eventLink} target="_blank" rel="noopener noreferrer" >Get Tickets</EventLinkStyles>*/}
                        </EventDetailsStyles>
                    </EventCard>
                ))
                }
            </EventsStyles>
        </SignalContainerStyles>
    );
};

export default Soldier;