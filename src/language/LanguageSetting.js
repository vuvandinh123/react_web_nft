import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import viTranslation from './vi.json';
import enTranslation from './en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      vi: {
        translation: viTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    lng: 'en', // Ngôn ngữ mặc định
    fallbackLng: 'en', // Ngôn ngữ dự phòng khi không tìm thấy ngôn ngữ hiện tại
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
