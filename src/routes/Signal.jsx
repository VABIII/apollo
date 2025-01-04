import React from 'react';
import {Box, styled} from "@mui/material";
import {
    EventsStyles,
    EventStyles,
    ImgStyles,
    LinkStyles,
    TextStyles,
    TitleStyles
} from "../components/styledComponents/index.jsx";
import {testData} from "../modules/TestData.js";


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

const shows = testData.filter((evt) => evt.eventVenue === "The Signal");
console.log(shows)




const Signal = () => {
    return (
        <SignalContainerStyles>
            Signal
            <EventsStyles container spacing={2} sx={{ p: 4 }}>
                <EventsStyles container spacing={2} size={5}>
                    { shows.map(({eventVenue, eventArtist, eventDate, eventLink, eventTime, eventImgSrc}, idx) => (
                        <EventStyles key={idx} size={6}  id={idx}>
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
        </SignalContainerStyles>
    );
};

export default Signal;