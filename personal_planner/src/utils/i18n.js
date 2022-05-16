import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { language } from "../constants/translationsConstants";
import translationsEN from "../translations/translationsEN.json";
import translationsUA from "../translations/translationsUA.json";

const resources = {
  [language.en]: translationsEN,
  [language.ua]: translationsUA,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: language.en,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
