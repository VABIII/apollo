import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderBar } from "../components/HeaderBar.jsx";
import FooterBar from "../components/FooterBar.jsx";
import Today from "../components/Today.jsx";
import {Typography, Box, styled, Button, Grid2, Container, Card, Link} from "@mui/material";
import Events, {useEvents} from "../modules/Events";
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
    HomeCardBoxStyles,
    NoShowTitleStyles,
    TodayTitleStyles,
} from "../components/styledComponents/index.jsx";
import NoShows from "../components/NoShows.jsx";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import {VenueContainerStyles, VenuesTitleStyles, VenueListStyles, VenueCard, VenueCardImgStyles, VenueCardTextStyles, HomeCardTextStyles, HomeCardTitleStyles, HomeCardLinkStyles} from "../components/styledComponents/index.jsx";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const options = {
    shouldForwardProp: (prop) => prop !== 'hoverShadow',
};

const EventCard = styled(Card,options)(({theme, hoverShadow= 1}) => ({
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(4),
    boxShadow: theme.shadows[3],
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    ':hover': {
        boxShadow: theme.shadows[hoverShadow],
    },
}));

const Home = () => {
    const { fetchTodaysEvents, events, setEvents } = useEvents();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const { t } = useTranslation("Home");

    const onClick = async () => {
        console.log(events)
    }

    useEffect( () => {
        // fetchTodaysEvents();
    }, []);

    let shows = testData.map(evt => {
        evt.eventDate = new Date(evt.eventDate);
        return evt;
    });
    console.log(shows)

    const todaysShows = shows.filter((evt) => {
        const today = new Date();
        const forDay = today.toLocaleString('default',{day: 'numeric', month: 'numeric', year: 'numeric'});
        if (evt.eventDate.toLocaleString('default',{day: 'numeric', month: 'numeric', year: 'numeric'}) === forDay) return true;
    });

    shows = shows.sort(((a,b) => a.eventDate - b.eventDate));
    shows.forEach( show => show.eventDate = show.eventDate.toLocaleDateString() );
    // shows.filter(evt => evt.eventDate === new Date().toLocaleDateString());

    const cards = shows.slice(0,3).map(({eventVenue, eventArtist, eventDate, eventLink, eventTime, eventImgSrc}, idx) => {
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
        };

        return (
        <EventCard hoverShadow={10} key={idx}>
            {!matches && <VenueCardImgStyles component='img' src={source}/>}
            <HomeCardBoxStyles>
                <HomeCardTitleStyles variant='h4' >{eventArtist.replace(" — The Signal", "")}</HomeCardTitleStyles>
                <HomeCardTextStyles variant='h6' >{eventTime}</HomeCardTextStyles>
                <HomeCardTextStyles variant='h6' >{eventDate}</HomeCardTextStyles>
                <LinkStyles href={eventLink} target="_blank" rel="noopener noreferrer" >{t("HomeECTicketLink")}</LinkStyles>
            </HomeCardBoxStyles>
        </EventCard>
        )
    });


    return (
        <HomeStyles >
                <LogoStyles
                    component="img"
                    src='/clm_logo_w_bg.png'
                />
                <NoShowsBoxStyles>
                    <Container  >
                        {
                            todaysShows.length > 0 ?
                                <TodayTitleStyles id='789' variant={'h2'}>{t('HomeTitle')}</TodayTitleStyles> :
                                <NoShows/>
                        }
                    </Container>
                </NoShowsBoxStyles>
            <Container>
                {
                    todaysShows.length > 0 ?
                        <Today
                            shows={todaysShows}
                        /> : cards
                }
            </Container>
        </HomeStyles >
    );
};

export default Home;