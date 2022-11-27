import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './src/assets/i18n';
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'pt',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
