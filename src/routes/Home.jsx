import React, {useEffect, useState} from 'react';
import { HeaderBar } from "../components/HeaderBar.jsx";
import {Typography, Box, styled, Button, Grid2, Container} from "@mui/material";
import Events, {useEvents} from "../modules/Events";
import {Link} from "react-router-dom";
import { colors } from "../theme.js";
import FooterBar from "../components/FooterBar.jsx";

const venues = {

}


const HomeStyles = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
    height: "100vh",
    minHeight: 'calc(100vh - 170px)',
    // backgroundColor: colors.get("nightMoon")
}));

const LogoStyles = styled(Box)(({theme}) => ({
    display: "flex",
    flexGrow: 1,
    width: "100%",
    height: "33vh",
    justifyContent: "center",
}));



const TitleStyles = styled(Typography)(({theme}) => ({
    color: colors.get("mandarin"),
    fontSize: '1.5rem',
    fontWeight: 500,
    // padding: theme.spacing(2),
}))

const SubtitleStyles = styled(Typography)(({theme}) => ({
    color: colors.get("nightMoon"),
    fontWeight: 500,
    padding: theme.spacing(4),
}))

const EventsStyles = styled(Grid2)(({theme}) => ({
    display: "flex",
    flexGrow: 1,
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexWrap: "wrap",
    flexDirection: "row",
    maxWidth: '100%',

}));

const EventStyles = styled(Grid2)(({theme}) => ({
    width:"25%",
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(4),

}));

const TextStyles = styled(Typography)(({theme}) => ({
    // color: colors.get("nightMoon"),
    color: colors.get("darkGrey2"),
}));

const LinkStyles = styled(Link)(({theme}) => ({
    textDecoration: 'none',
    // color: colors.get("deepBlue"),
    color: theme.palette.text.secondary,
}))

const ImgStyles = styled(Box)(({theme}) => ({
    maxWidth: '100%',
    borderRadius: 10,
    marginBottom: theme.spacing(2),
}))



const Home = () => {
    const { fetchTodaysEvents, events, setEvents } = useEvents();

    const onClick = async () => {
        console.log(events)
    }

    useEffect( () => {
        fetchTodaysEvents();
    }, []);

    const todaysShows = events ? events.filter(({eventDate}) => {
        return eventDate.slice(0, 10) === new Date().toLocaleDateString()
    }) : [];

    const shows = todaysShows.length > 0 ? todaysShows : events;
    console.log(shows)

    return (
        <HomeStyles  >
            <>
                <LogoStyles
                    component="img"
                    src='/clm_logo_w_bg.png'
                    id='456'
                />
                <SubtitleStyles id='789' variant={'h2'}>Today's Shows Around Town</SubtitleStyles>
            </>
            <EventsStyles container spacing={2} sx={{ p: 4 }}>
                <EventsStyles container spacing={2} size={5}>
                    { events &&
                        shows.map(({eventVenue, eventArtist, eventDate, eventLink, eventTime, eventImgSrc}, idx) => (
                            <EventStyles key={idx} size={6}  >
                                <ImgStyles component='img' src={eventImgSrc} alt='event image' />
                                <TitleStyles variant='h4' >{eventArtist.replace(" — The Signal", "")}</TitleStyles>
                                <TextStyles variant='h6' >{eventVenue}</TextStyles>
                                <TextStyles variant='h6' >{eventDate}</TextStyles>
                                <TextStyles variant='h6' >{eventTime}</TextStyles>
                                <LinkStyles to={eventLink} target="_blank" rel="noopener noreferrer" >Get Tickets</LinkStyles>
                            </EventStyles>
                        ))
                    }
                </EventsStyles>
            </EventsStyles>
        </HomeStyles >
    );
};

export default Home;