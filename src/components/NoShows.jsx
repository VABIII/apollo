import React from 'react';
import {HomeStyles, TitleStyles, ImgStyles, LinkStyles, TextStyles, EventStyles, EventsStyles, LogoStyles, SubtitleStyles, NoShowsBanner, NoShowTitleStyles, NoShowSubTitleStyles,} from "./styledComponents/index.jsx";


const NoShows = () => {
    return (
        <NoShowsBanner>
            <NoShowTitleStyles variant={"h3"}>Unfortunately, we do not have any shows for you today. </NoShowTitleStyles>
            <NoShowSubTitleStyles variant={"h3"}>Check out these upcoming events or the venue pages for full show lineups.</NoShowSubTitleStyles>
            {/*<TextStyles variant={"h3"}></TextStyles>*/}

        </NoShowsBanner>
    );
};

export default NoShows;
















































