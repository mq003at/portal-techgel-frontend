import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Use the http backend for loading translations
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development', // Enable debugging in development

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to your translation files
    },

    ns: ['common', 'organization', 'product' /* ... other namespaces */], // Your namespaces (match your folder structure)
    defaultNS: 'common', // Default namespace to use if not specified

    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
