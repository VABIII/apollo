import React, {useEffect, useState} from 'react';
import { HeaderBar } from "../components/HeaderBar.jsx";
import FooterBar from "../components/FooterBar.jsx";
import Today from "../components/Today.jsx";
import {Typography, Box, styled, Button, Grid2, Container, Card} from "@mui/material";
import Events, {useEvents} from "../modules/Events";
import {Link} from "react-router-dom";
import moment from "moment";
import { colors } from "../theme.js";
import { testData } from "../modules/TestData.js";
import {
    HomeStyles,
    SubtitleStyles,
    LogoStyles,
    EventsStyles,
    EventStyles,
    LinkStyles,
    ImgStyles,
    TitleStyles,
    TextStyles,
    NoShowsBoxStyles,
    HomeCardBoxStyles
} from "../components/styledComponents/index.jsx";
import NoShows from "../components/NoShows.jsx";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import {VenueContainerStyles, VenuesTitleStyles, VenueListStyles, VenueCard, VenueCardImgStyles, VenueCardTextStyles, HomeCardTextStyles, HomeCardTitleStyles, HomeCardLinkStyles} from "../components/styledComponents/index.jsx";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const EventCard = styled(Card)(({theme}) => ({
    // width: "100%",
    display: "flex",
    flexDirection: "row",
    // width:"33%",
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(4),
    boxShadow: theme.shadows[5],
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        // justifyContent: "flex-start",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}))

const Home = () => {
    const { fetchTodaysEvents, events, setEvents } = useEvents();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const onClick = async () => {
        console.log(events)
    }

    useEffect( () => {
        fetchTodaysEvents();
    }, []);


    // const shows = todaysShows.length > 0 ? todaysShows : events;


    let shows = testData.map(evt => {
        evt.eventDate = new Date(evt.eventDate);
        return evt;
    });

    const todaysShows = shows.filter(({eventDate}) => {
        return eventDate === new Date();
    });

    console.log(todaysShows);

    shows = shows.sort(((a,b) => a.eventDate - b.eventDate));
    shows.forEach( show => show.eventDate = show.eventDate.toLocaleDateString() );

    const cards = shows.slice(0,3).map(({eventVenue, eventArtist, eventDate, eventLink, eventTime, eventImgSrc}) => {
        let source;
        switch(eventVenue){
            case "The Walker Theatre":
                source = 'walker_logo_no_bg_md.png';
                break;
            case "Soldiers and Sailors Memorial Auditorium":
                source = 'soldiers_logo_w_bg_md.png';
                break;
            case "The Signal":
                source = 'signal_logo_w_bg_md_white.png';
                break;


        }


        return (
        <EventCard>
            {!matches && <VenueCardImgStyles component='img' src={source}/>}
            <HomeCardBoxStyles>
                <HomeCardTitleStyles variant='h4' >{eventArtist.replace(" — The Signal", "")}</HomeCardTitleStyles>
                {/*<HomeCardTextStyles variant='h6' >{eventVenue}</HomeCardTextStyles>*/}
                <HomeCardTextStyles variant='h6' >{eventDate}</HomeCardTextStyles>
                <HomeCardTextStyles variant='h6' >{eventTime}</HomeCardTextStyles>
                <LinkStyles to={eventLink} target="_blank" rel="noopener noreferrer" >Get Tickets</LinkStyles>
            </HomeCardBoxStyles>
        </EventCard>
        )
    })





    return (
        <HomeStyles >
                <LogoStyles
                    component="img"
                    src='/clm_logo_w_bg.png'
                    id='456'
                />
                <NoShowsBoxStyles>
                    <Container >
                        {
                            todaysShows.length > 0 ?
                                <SubtitleStyles id='789' variant={'h3'}>Today's Shows Around Town</SubtitleStyles> :
                                <NoShows/>
                            // <SubtitleStyles id='789' variant={'h2'}>Unfortunately, we do not have any shows for you today.</SubtitleStyles>
                        }
                        {/*{todaysShows.length === 0 && <NoShows/>}*/}

                    </Container>
                </NoShowsBoxStyles>
            <Container>
                {/*<Today*/}
                {/*    shows={shows}*/}
                {/*/>*/}
                {cards}

            </Container>
        </HomeStyles >
    );
};

export default Home;