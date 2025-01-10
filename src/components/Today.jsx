import React from 'react';
import {useTranslation} from 'react-i18next';
import {Box, Card, Grid2, styled, Typography} from "@mui/material";
import {colors} from "../theme.js";
import {Link} from "react-router-dom";
import {EventsStyles, ImgStyles, LinkStyles, TextStyles, TitleStyles} from "./styledComponents/index.jsx";
import {EventCard} from "./venueComponents/index.jsx";


// const TitleStyles = styled(Typography)(({theme}) => ({
//     color: colors.get("mandarin"),
//     fontSize: '1.5rem',
//     fontWeight: 500,
// }))
// const EventsStyles = styled(Grid2)(({theme}) => ({
//     display: "flex",
//     flexGrow: 1,
//     alignItems: "flex-start",
//     justifyContent: "space-around",
//     flexWrap: "wrap",
//     flexDirection: "row",
//     maxWidth: '100%',
//     [theme.breakpoints.down("sm")]: {
//         justifyContent: "flex-start",
//     }
//
// }));
//
// const TextStyles = styled(Typography)(({theme}) => ({
//     color: colors.get("darkGrey2"),
// }));
//
// const LinkStyles = styled(Link)(({theme}) => ({
//     textDecoration: 'none',
//     color: theme.palette.text.secondary,
//     fontSize: '1.5rem',
// }))
//
// const ImgStyles = styled(Box)(({theme}) => ({
//     maxWidth: '100%',
//     borderRadius: 10,
//     marginBottom: theme.spacing(2),
// }))
//
// const EventCard = styled(Card)(({theme}) => ({
//     display: "flex",
//     flexDirection: "column",
//     width:"33%",
//     padding: theme.spacing(3),
//     borderRadius: theme.spacing(2),
//     margin: theme.spacing(4),
//     boxShadow: theme.shadows[5],
//     [theme.breakpoints.down("sm")]: {
//         width: "100%",
//         justifyContent: "flex-start",
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//     }
// }))



const Today = ({shows}) => {
    const {t} = useTranslation("Home");

    return (
        <EventsStyles container spacing={2} sx={{ p: 4 }}>
            <EventsStyles container spacing={2} size={5}>
                {
                    shows.map(({eventVenue, eventArtist, eventDate, eventLink, eventTime, eventImgSrc}, idx) => (
                        <EventCard key={idx} size={6}  id={idx}>
                            <ImgStyles component='img' src={eventImgSrc} alt='event image' />
                            <TitleStyles variant='h4' >{eventArtist.replace(" — The Signal", "")}</TitleStyles>
                            <TextStyles variant='h6' >{eventVenue}</TextStyles>
                            <TextStyles variant='h6' >{eventDate}</TextStyles>
                            <TextStyles variant='h6' >{eventTime}</TextStyles>
                            <LinkStyles to={eventLink} target="_blank" rel="noopener noreferrer" >{t("HomeECTicketLink")}</LinkStyles>
                        </EventCard>
                    ))
                }
            </EventsStyles>
        </EventsStyles>
    );
};

export default Today;









