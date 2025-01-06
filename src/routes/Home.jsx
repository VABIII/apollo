import React, {useEffect, useState} from 'react';
import { HeaderBar } from "../components/HeaderBar.jsx";
import FooterBar from "../components/FooterBar.jsx";
import Today from "../components/Today.jsx";
import {Typography, Box, styled, Button, Grid2, Container} from "@mui/material";
import Events, {useEvents} from "../modules/Events";
import {Link} from "react-router-dom";
import moment from "moment";
import { colors } from "../theme.js";
import { testData } from "../modules/TestData.js";
import { HomeStyles, SubtitleStyles, LogoStyles, EventsStyles, EventStyles, LinkStyles, ImgStyles, TitleStyles, TextStyles } from "../components/styledComponents/index.jsx";
import NoShows from "../components/NoShows.jsx";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';



const Home = () => {
    const { fetchTodaysEvents, events, setEvents } = useEvents();

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




    shows = shows.sort(((a,b) => a.eventDate - a.eventDate));
    shows.forEach( show => show.eventDate = show.eventDate.toLocaleDateString() );


    console.log("Shows: ", shows)


    return (
        <HomeStyles >
                <LogoStyles
                    component="img"
                    src='/clm_logo_w_bg.png'
                    id='456'
                />
                <Container>
                    {
                        todaysShows.length > 0 ?
                            <SubtitleStyles id='789' variant={'h3'}>Today's Shows Around Town</SubtitleStyles> :
                            <NoShows/>
                            // <SubtitleStyles id='789' variant={'h2'}>Unfortunately, we do not have any shows for you today.</SubtitleStyles>
                    }
                {/*{todaysShows.length === 0 && <NoShows/>}*/}
                <Today
                    shows={shows}
                />
            </Container>
        </HomeStyles >
    );
};

export default Home;