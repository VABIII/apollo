import React from 'react';
import { useNavigate } from 'react-router-dom'
import {
    VenueContainerStyles,
    VenuesTitleStyles,
    VenueListStyles,
    VenueCard,
    VenueCardImgStyles,
    VenueCardTextStyles
} from "../components/styledComponents/index.jsx";

const Venue = () => {
    const navigate = useNavigate();

    const onClick = name => {
        navigate(`/venues/${name}`);
    };

    return (
        <VenueContainerStyles>
            <VenuesTitleStyles variant={"h3"}>Live Venues of Chattanooga</VenuesTitleStyles>
            <VenueListStyles id={123}>
                <VenueCard hoverShadow={10} onClick={() => onClick("walker")} >
                    <VenueCardImgStyles component='img' src={'walker_logo_no_bg_md.png'} />
                    <VenueCardTextStyles component='h1'>The Walker Theatre</VenueCardTextStyles>
                </VenueCard>
                <VenueCard hoverShadow={10} onClick={() => onClick("soldier")}>
                    <VenueCardImgStyles component='img' src={'soldiers_logo_w_bg_md.png'} />
                    <VenueCardTextStyles component='p'>Soldiers and Sailors</VenueCardTextStyles>
                </VenueCard>
                <VenueCard hoverShadow={10} onClick={() => onClick("signal")}>
                    <VenueCardImgStyles component='img' src={'signal_logo_w_bg_md_white.png'} />
                    <VenueCardTextStyles component='p'>The Signal</VenueCardTextStyles>
                </VenueCard>
                <VenueCard hoverShadow={10} onClick={() => onClick("tivoli")}>
                    <VenueCardImgStyles component='img' src={'tivoli_logo_w_bg_md.png'} />
                    <VenueCardTextStyles component='p'>The Tivoli Theatre</VenueCardTextStyles>
                </VenueCard>
            </VenueListStyles>
        </VenueContainerStyles>
    );
};

export default Venue;