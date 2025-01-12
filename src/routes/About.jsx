import React from 'react';
import { useTranslation } from 'react-i18next';
import { AboutContainer } from "../components/aboutComponents/index.jsx";


const About = () => {
    const { t } = useTranslation('About');

    return (
        <AboutContainer t={t}/>
    );
};

export default About;
















































