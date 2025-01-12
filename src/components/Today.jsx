import React from 'react';
import { useTranslation } from 'react-i18next';
import { EventsStyles, TitleStyles } from "./styledComponents/index.jsx";
import {
    EventCard,
    EventDetailsStyles,
    EventImgStyles,
    EventLinkStyles,
    EventTextStyles,
    EventDateStyles,
} from "./venueComponents/index.jsx";
import { Box } from "@mui/material";


const Today = ({shows}) => {
    const {t} = useTranslation("Home");

    return (
        <EventsStyles container spacing={2} sx={{ p: 4 }}>
            <EventsStyles container spacing={2} size={5}>
                {
                    shows.map(({eventVenue, eventArtist, eventDate, eventLink, eventTime, eventImgSrc}, idx) => (
                        <EventCard key={idx} size={6}  id={idx} hoverShadow={10}>
                            <EventImgStyles component='img' src={eventImgSrc} alt='event image' />
                            <TitleStyles variant='h4' >{eventArtist.replace(" — The Signal", "")}</TitleStyles>
                            <EventDetailsStyles container spacing={2} >
                                <Box size={12}>
                                    <EventLinkStyles href={eventLink} target="_blank" rel="noopener noreferrer" >Get Tickets</EventLinkStyles>
                                </Box>
                                <EventDateStyles size={6} >
                                    <EventTextStyles variant='h6' >{`${eventDate}`}</EventTextStyles>
                                    <EventTextStyles variant='h6' >{eventTime}</EventTextStyles>
                                </EventDateStyles>
                                <Box size={4}>
                                </Box>
                                <Box size={12}>
                                    <EventTextStyles variant='h6' >{eventVenue}</EventTextStyles>
                                </Box>
                            </EventDetailsStyles>
                        </EventCard>
                    ))
                }
            </EventsStyles>
        </EventsStyles>
    );
};

export default Today;









