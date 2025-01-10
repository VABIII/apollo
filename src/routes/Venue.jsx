import React from 'react';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation('Venues');
    const navigate = useNavigate();

    const onClick = name => {
        navigate(`/venues/${name}`);
    };

    return (
        <VenueContainerStyles>
            <VenuesTitleStyles variant={"h3"}>{t("VenuesPageTitle")}</VenuesTitleStyles>
            <VenueListStyles id={123}>
                <VenueCard hoverShadow={10} onClick={() => onClick("walker")} >
                    <VenueCardImgStyles component='img' src={'walker_logo_no_bg_md.png'} />
                    <VenueCardTextStyles component='h1'>{t('WalkerCardTitle')}</VenueCardTextStyles>
                </VenueCard>
                <VenueCard hoverShadow={10} onClick={() => onClick("soldier")}>
                    <VenueCardImgStyles component='img' src={'soldiers_logo_w_bg_md.png'} />
                    <VenueCardTextStyles component='p'>{t('SoldierCardTitle')}</VenueCardTextStyles>
                </VenueCard>
                <VenueCard hoverShadow={10} onClick={() => onClick("signal")}>
                    <VenueCardImgStyles component='img' src={'signal_logo_w_bg_md_white.png'} />
                    <VenueCardTextStyles component='p'>{t('SignalCardTitle')}</VenueCardTextStyles>
                </VenueCard>
                <VenueCard hoverShadow={10} onClick={() => onClick("tivoli")}>
                    <VenueCardImgStyles component='img' src={'tivoli_logo_w_bg_md.png'} />
                    <VenueCardTextStyles component='p'>{t('TivoliCardTitle')}</VenueCardTextStyles>
                </VenueCard>
            </VenueListStyles>
        </VenueContainerStyles>
    );
};

export default Venue;