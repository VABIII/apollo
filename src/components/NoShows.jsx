import React from 'react';
import {HomeStyles, TitleStyles, ImgStyles, LinkStyles, TextStyles, EventStyles, EventsStyles, LogoStyles, SubtitleStyles, NoShowsBanner} from "./styledComponents/index.jsx";


const NoShows = () => {
    return (
        <NoShowsBanner>
            <SubtitleStyles variant={"h3"}>Unfortunately, we do not have any shows for you today. </SubtitleStyles>
            <TextStyles variant={"h3"}>Check out these upcoming events or the venue pages for full show lineups.</TextStyles>
            {/*<TextStyles variant={"h3"}></TextStyles>*/}

        </NoShowsBanner>
    );
};

export default NoShows;
















































