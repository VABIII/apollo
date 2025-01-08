import React from 'react';
import {Grid2, Zoom, Grow, Typography,} from "@mui/material";
import { testData } from "../modules/TestData.js";
import {
    EventsStyles,
    TitleStyles,
} from "../components/styledComponents/index.jsx";
import {
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
} from '../components/venueComponents';




const Tivoli = () => {
const shows = testData.filter((evt) => evt.eventVenue === "The Signal");

    return (
        <VenueContainerStyles>
            <VenueTitleContainerStyles>
                <VenueTitleStyles variant='h2' >The Tivoli Theatre</VenueTitleStyles>
            </VenueTitleContainerStyles>
            <EventsStyles container spacing={2} sx={{ p: 4 }}>
                <EventCard size={6} hoverShadow={10} >
                    <VenueLogoStyles component='img' src={window.location.origin +  '/tivoli_theatre_bg_img.jpg'} alt='event image' />
                    <EventDetailsStyles container spacing={2} >
                        <Grid2 size={12}>
                            <EventLinkStyles to={"https://tivolichattanooga.com/tivoli_theatre"} target="_blank" rel="noopener noreferrer" >Visit The Tivoli</EventLinkStyles>
                        </Grid2>
                        <Grid2 size={4}>
                            <VenueAddressStyles variant='h6' >(423) 757-5580</VenueAddressStyles>
                        </Grid2>
                        <Grid2 size={12}>
                            <AddressLinkStyles className="custom-link" target="_blank" rel="noopener noreferrer" href='https://www.google.com/maps/dir/35.0424217,-85.3066781/the+tivoli/@35.0451334,-85.313806,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x88605e6329395783:0x681807242c1434e3!2m2!1d-85.3107328!2d35.0479011?entry=ttu&g_ep=EgoyMDI1MDEwNi4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D'>
                                <VenueAddressStyles variant='h6' >709 Broad St. Chattanooga</VenueAddressStyles>
                                <VenueAddressStyles variant='h6' >Chattanooga, TN 37402</VenueAddressStyles>
                            </AddressLinkStyles>
                        </Grid2>
                    </EventDetailsStyles>
                </EventCard>
                {
                    shows.map(({eventVenue, eventArtist, eventDate, eventLink, eventTime, eventImgSrc}, idx) => (
                    <EventCard key={idx} size={6}  id={idx} hoverShadow={10}>
                        <EventImgStyles component='img' src={eventImgSrc} alt='event image' />
                        <TitleStyles variant='h4' >{eventArtist.replace(" — The Signal", "")}</TitleStyles>
                        <EventDetailsStyles container spacing={2} >
                            <Grid2 size={12}>
                                <EventLinkStyles to={eventLink} target="_blank" rel="noopener noreferrer" >Get Tickets</EventLinkStyles>
                            </Grid2>
                            <Grid2 size={4}>
                                <EventTextStyles variant='h6' >{eventDate}</EventTextStyles>
                            </Grid2>
                            <Grid2 size={4}>
                                <EventTextStyles variant='h6' >{eventTime}</EventTextStyles>
                            </Grid2>
                            <Grid2 size={12}>
                                <EventTextStyles variant='h6' >{eventVenue}</EventTextStyles>
                            </Grid2>
                        </EventDetailsStyles>
                    </EventCard>
                ))
                }
            </EventsStyles>
        </VenueContainerStyles>
    );
};

export default Tivoli;