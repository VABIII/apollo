import React from 'react';
import { testData } from "../modules/TestData.js";
import { Grid2, } from "@mui/material";
import {
    EventsStyles,
    TitleStyles
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




const Soldier = () => {
    const shows = testData.filter((evt) => evt.eventVenue === "Soldiers and Sailors Memorial Auditorium");

    return (
        <VenueContainerStyles>
            <VenueTitleContainerStyles>
                <VenueTitleStyles variant='h2' >Soldiers and Sailors Memorial Auditorium</VenueTitleStyles>
            </VenueTitleContainerStyles>
            <EventsStyles container spacing={2} sx={{ p: 4 }}>
                <EventCard size={6} hoverShadow={10}>
                    <VenueLogoStyles component='img' src={window.location.origin +  '/memorial_bg_img.jpg'} alt='event image' />
                    <EventDetailsStyles container spacing={2} >
                        <Grid2 size={12}>
                            <EventLinkStyles to={"https://tivolichattanooga.com/memorial_auditorium"} target="_blank" rel="noopener noreferrer" >Visit Memorial Auditorium</EventLinkStyles>
                        </Grid2>
                        <Grid2 size={4}>
                            <VenueAddressStyles variant='h6' >(423) 757-5580</VenueAddressStyles>
                        </Grid2>
                        <Grid2 size={12}>
                            <AddressLinkStyles target="_blank" rel="noopener noreferrer" to='https://www.google.com/maps/dir//399+McCallie+Ave,+Chattanooga,+TN+37402/@35.0476938,-85.3881343,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88605e65262dc6d7:0x30e7f24c45806a6e!2m2!1d-85.3056094!2d35.0476272?entry=ttu&g_ep=EgoyMDI1MDEwNi4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D'>
                                <VenueAddressStyles variant='h6' >399 McCallie Ave</VenueAddressStyles>
                                <VenueAddressStyles variant='h6' >Chattanooga, TN 37402</VenueAddressStyles>
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

export default Soldier;


// <EventsStyles container spacing={2} sx={{ p: 4 }}>
//     <VenueLogoCardStyles size={6}>
//         <VenueContentStyles>
//             <VenueLogoStyles component='img' src='/soldiers_logo_w_bg_md.png'/>
//
//             <VenueDetailsStyles>
//                 <VenueTitleStyles variant='h3'>
//                     Soldiers and Sailors Memorial Auditorium
//                 </VenueTitleStyles>
//             </VenueDetailsStyles>
//         </VenueContentStyles>
//     </VenueLogoCardStyles>
// </EventsStyles >