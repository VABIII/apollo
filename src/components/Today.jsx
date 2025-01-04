import React from 'react';
import {Box, Grid2, styled, Typography} from "@mui/material";
import {colors} from "../theme.js";
import {Link} from "react-router-dom";
import {testData} from "../modules/TestData.js";


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
const EventsStyles = styled(Grid2)(({theme}) => ({
    display: "flex",
    flexGrow: 1,
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexWrap: "wrap",
    flexDirection: "row",
    maxWidth: '100%',
    [theme.breakpoints.down("sm")]: {
        justifyContent: "flex-start",
    }

}));

const EventStyles = styled(Grid2)(({theme}) => ({
    width:"25%",
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        justifyContent: "flex-start",
    }

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



const Today = ({shows}) => {
    return (
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
    );
};

export default Today;









