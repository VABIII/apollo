import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import raw from './translations/en.json';

const resources = {
    en: raw,
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    },
});


export default i18n;







