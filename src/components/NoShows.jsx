import React from 'react';
import { NoShowsBanner, NoShowTitleStyles, NoShowSubTitleStyles, } from "./styledComponents/index.jsx";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import {Box} from "@mui/material";

const iconStyles =  {
    fontSize: 'inherit',
    justifySelf: 'center',
    alignSelf: 'center'
}

const NoShows = () => {
    return (
        <NoShowsBanner>
            <NoShowTitleStyles variant={"h3"}>Unfortunately, we do not have any shows for you today. <SentimentVeryDissatisfiedIcon sx={iconStyles} /> </NoShowTitleStyles>
            <Box sx={{fontSize: '128px'}}>

            </Box>
            <NoShowSubTitleStyles variant={"h3"}>Check out these upcoming events or the venue pages for full show lineups.</NoShowSubTitleStyles>
            {/*<TextStyles variant={"h3"}></TextStyles>*/}

        </NoShowsBanner>
    );
};

export default NoShows;
















































