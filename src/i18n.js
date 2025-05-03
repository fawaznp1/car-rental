import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        link: "Link",
      },
    },
    fr: {
      translation: {
        home: "Accueil",
        link: "Lien",
      },
    },
  },
  lng: "en", // default language
  fallbackLng: "en", // language to fallback to
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
