import React from 'react';
import {Box, Grid2, styled} from "@mui/material";
import {ImgStyles} from "../components/styledComponents/index.jsx";
import { useNavigate } from 'react-router-dom'


const VenueContainerStyles = styled(Box)(({theme}) => ({
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

const VenueListStyles = styled(Grid2)(({theme}) => ({
    display: "flex",
    flexGrow: 1,
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexWrap: "wrap",
    flexDirection: "row",
    // maxWidth: '75%',

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



const Venue = () => {
    const navigate = useNavigate();


    const onClick = name => {
        navigate(`/venues/${name}`);

    }

    return (
        <VenueContainerStyles>
            <VenueListStyles>
                <VenueStyles onClick={() => onClick("soldier")} >
                    <ImgStyles component='img' src={'soldiers_logo_w_bg_md.png'} />
                </VenueStyles>
                <VenueStyles  onClick={() => onClick("signal")}>
                    <ImgStyles component='img' src={'signal_logo_w_bg_md_white.png'} />
                </VenueStyles>
                <VenueStyles  onClick={() => onClick("tivoli")}>
                    <ImgStyles component='img' src={'tivoli_logo_w_bg_md.png'} />
                </VenueStyles>
                <VenueStyles onClick={() => onClick("walker")} >
                    <ImgStyles component='img' src={'walker_logo_no_bg_md.png'} />
                </VenueStyles>
            </VenueListStyles>
        </VenueContainerStyles>
    );
};

export default Venue;