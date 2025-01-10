import React from 'react';
import { useTranslation } from 'react-i18next'
import { NoShowsBanner, NoShowTitleStyles, NoShowSubTitleStyles, } from "./styledComponents/index.jsx";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import {Box} from "@mui/material";

const iconStyles =  {
    fontSize: 'inherit',
    justifySelf: 'center',
    alignSelf: 'center'
};

const NoShows = () => {
    const {t } = useTranslation('NoShows');

    return (
        <NoShowsBanner>
            <NoShowTitleStyles variant={"h3"}>{t('NoShowsTitle')}<SentimentVeryDissatisfiedIcon sx={iconStyles} /> </NoShowTitleStyles>
            <Box sx={{fontSize: '128px'}}>
            </Box>
            <NoShowSubTitleStyles variant={"h3"}>{t("NoShowsSubtitles")}</NoShowSubTitleStyles>
        </NoShowsBanner>
    );
};

export default NoShows;
















































