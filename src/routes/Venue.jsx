import React from 'react';
import {Box, Card, Container, Grid2, styled, Typography} from "@mui/material";
import { useNavigate } from 'react-router-dom'
import {colors} from "../theme.js";
import {NoShowTitleStyles, SubtitleStyles} from "../components/styledComponents/index.jsx";


const VenueContainerStyles = styled(Container)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
    // height: "100vh",
    minHeight: 'calc(100vh - 170px)',
    // backgroundColor: colors.get("nightMoon")
    [theme.breakpoints.down("sm")]: {
        // width: "100%"
        justifyContent: "flex-start",
    }
}));

const VenueListStyles = styled(Grid2)(({theme}) => ({
    display: "flex",
    flexGrow: 1,
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexWrap: "wrap",
    flexDirection: "row",
    // maxWidth: '75%',
    [theme.breakpoints.down("sm")]: {
        // width: "100%",
        justifyContent: "center",
        alignItems: "center",

    }

}));

const VenueStyles = styled(Grid2)(({theme}) => ({
    // // width:"25%",
    // height: "300px",
    // padding: theme.spacing(3),
    // borderRadius: 10,
    // margin: theme.spacing(4),
    // [theme.breakpoints.down("sm")]: {
    //     width: "100%",
    //     marginTop: 0,
    // }

    width:"33%",
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        justifyContent: "flex-start",
    }
}));

const VenueCard = styled(Card)(({theme}) => ({
    // width: "100%",
    display: "flex",
    // width:"45%",
    // padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(4),
    boxShadow: theme.shadows[5],
    // boxShadow: "5px 10px #14365D",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        justifyContent: "flex-start",
        margin: 0,
        marginTop: theme.spacing(4),
    }
}))

const ImgStyles = styled(Box)(({theme}) => ({
    maxWidth: '33%',
    // backgroundColor: '#14365D',
    borderRadius: 10,
    margin: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        maxWidth: '40%',
    }

}));

const TextStyles = styled(Typography)(({theme}) => ({
    // color: colors.get("nightMoon"),
    color: colors.get("darkGrey2"),
    fontSize: '1.75rem',
    padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        paddingBottom: theme.spacing(2),
    }
}));

const VenuesTitleStyles = styled(Typography)(({theme}) => ({
    color: colors.get("nightMoon"),
    fontWeight: 500,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    // paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(4),
    // padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        textAlign: "left",

        paddingBottom: 0,
    }
}));


const Venue = () => {
    const navigate = useNavigate();


    const onClick = name => {
        navigate(`/venues/${name}`);

    }

    return (
        <VenueContainerStyles>
            <VenuesTitleStyles variant={"h3"}>Live Venues of Chattanooga</VenuesTitleStyles>
            <VenueListStyles>
                <VenueCard onClick={() => onClick("walker")} >
                    <ImgStyles component='img' src={'walker_logo_no_bg_md.png'} />
                    <TextStyles component='p'>The Walker Theater</TextStyles>
                </VenueCard>
                <VenueCard onClick={() => onClick("soldier")}>
                    <ImgStyles component='img' src={'soldiers_logo_w_bg_md.png'} />
                    <TextStyles component='p'>Soldiers and Sailors</TextStyles>
                </VenueCard>
                <VenueCard onClick={() => onClick("signal")}>
                    <ImgStyles component='img' src={'signal_logo_w_bg_md_white.png'} />
                    <TextStyles component='p'>The Signal</TextStyles>
                </VenueCard>
                <VenueCard  onClick={() => onClick("tivoli")}>
                    <ImgStyles component='img' src={'tivoli_logo_w_bg_md.png'} />
                    <TextStyles component='p'>The Tivoli Theater</TextStyles>
                </VenueCard>
            </VenueListStyles>
        </VenueContainerStyles>
    );
};

export default Venue;