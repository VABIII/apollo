import React from 'react';
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
} from '../components/venueComponents'
import {testData} from "../modules/TestData.js";


const Signal = () => {
const shows = testData.filter((evt) => evt.eventVenue === "The Signal");

    return (
        <VenueContainerStyles>
            <VenueTitleContainerStyles>
                <VenueTitleStyles variant='h2' >The Signal</VenueTitleStyles>
            </VenueTitleContainerStyles>
            <EventsStyles container spacing={2} sx={{ p: 4 }}>
                <EventCard size={6} hoverShadow={10}>
                    <VenueLogoStyles component='img' src={window.location.origin +  '/signal_bg_img.gif'} alt='event image' />
                    <EventDetailsStyles container spacing={2} >
                        <Grid2 size={12}>
                            <EventLinkStyles to={"https://www.thesignaltn.com/"} target="_blank" rel="noopener noreferrer" >Visit The Signal</EventLinkStyles> {/* TODO: Update link urls */}
                        </Grid2>
                        <Grid2 size={4}>
                            <VenueAddressStyles variant='h6' >(423) 498-4700</VenueAddressStyles>
                        </Grid2>
                        <Grid2 size={12}>
                            <AddressLinkStyles target="_blank" rel="noopener noreferrer" to='https://www.google.com/maps?sca_esv=519e96c50f78252e&sxsrf=ADLYWIJVKAFjg6pKeHPjyHkNSjpsHGAiKw:1736278875558&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3RoZSBzaWduYWwgKgIIADIOEC4YgAQYxwEYjgUYrwEyDRAuGIAEGLEDGEMYigUyBRAAGIAEMhAQABiABBixAxhDGIMBGIoFMhAQABiABBixAxhDGIMBGIoFMhAQLhiABBixAxhDGIMBGIoFMgoQLhiABBhDGIoFMgoQABiABBhDGIoFMgUQABiABDIFEAAYgAQyHRAuGIAEGMcBGI4FGK8BGJcFGNwEGN4EGOAE2AEBSJoMUPABWPABcAF4AZABAJgBb6ABb6oBAzAuMbgBAcgBAPgBAZgCA6AC3wrCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICGRAuGIAEGLADGEMYxwEYyAMYigUYrwHYAQHCAhMQLhiABBiwAxhDGMgDGIoF2AEBmAMAiAYBkAYRugYGCAEQARgIkgcHMS4xLjctMaAHhQ8&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KUU4FbkqXGCIMerlej_bWcyz&daddr=21+Choo+Choo+Ave,+Chattanooga,+TN+37402'>
                                <VenueAddressStyles variant='h6' >21 Choo Choo Ave</VenueAddressStyles>
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

export default Signal;