import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation resources
const resources = {
  en: {
    translation: {
      nav: {
        about: "ABOUT",
        services: "SERVICES",
        education: "EDUCATION",
        shop: "SHOP",
        blog: "BLOG",
        contacts: "CONTACTS",
        bookService: "BOOK A SERVICE",
        signIn: "SIGN IN",
        ourServices: "Our Services",
        healthCoach: "Health Coach",
      },
      hero: {
        title: "MIRRA BELLA",
        subtitle: "ESTHETICIAN STUDIO",
        location: "IN LOS ANGELES",
        description:
          "Preserve the natural beauty of your skin at the Beauty Studio of Maria Iankovska",
        contactUs: "CONTACT US",
      },
      logoAnimation: {
        mirrorOfBeautyName: "MIRROR OF BEAUTY",
        mirrorOfBeauty:
          "beauty salon, where the best estheticians take care of your skin",
        instituteOfAestheticsName: "INSTITUTE OF AESTHETICS",
        instituteOfAesthetics:
          "institute of aesthetics for mastering the profession or postgraduate education",
        mirrorOfHealthName: "MIRROR OF HEALTH",
        mirrorOfHealth:
          "consultations and coaching with a holistic approach to health",
        beautyInDropName: "BEAUTY IN DROP",
        beautyInDrop: "cosmetics store for the beauty of your skin",
        mirrorOfRealityName: "MIRROR OF REALITY",
        mirrorOfReality: "acquisition of equipment for professionals",
      },
    },
  },
  ru: {
    translation: {
      nav: {
        about: "О НАС",
        services: "УСЛУГИ",
        education: "ОБУЧЕНИЕ",
        shop: "МАГАЗИН",
        blog: "БЛОГ",
        contacts: "КОНТАКТЫ",
        bookService: "ЗАПИСАТЬСЯ",
        signIn: "ВОЙТИ",
        ourServices: "Наши услуги",
        healthCoach: "Коуч здоровья",
      },
      hero: {
        title: "MIRRA BELLA",
        subtitle: "СТУДИЯ ЭСТЕТИКИ",
        location: "В ЛОС-АНДЖЕЛЕСЕ",
        description:
          "Сохраните естественную красоту вашей кожи в Beauty Studio Марии Яньковской",
        contactUs: "СВЯЗАТЬСЯ С НАМИ",
      },
      logoAnimation: {
        mirrorOfBeautyName: "ЗЕРКАЛО КРАСОТЫ",
        mirrorOfBeauty:
          "салон красоты, где лучшие косметологи-эстетисты заботятся о вашей коже",
        instituteOfAestheticsName: "ИНСТИТУТ ЭСТЕТИКИ",
        instituteOfAesthetics:
          "институт эстетики для освоения профессии или последипломного обучения",
        mirrorOfHealthName: "ЗЕРКАЛО ЗДОРОВЬЯ",
        mirrorOfHealth:
          "консультации и коучинг с холистическим подходом к здоровью",
        beautyInDropName: "КРАСОТА В КАПЛЕ",
        beautyInDrop: "магазин косметики для красоты вашей кожи",
        mirrorOfRealityName: "ЗЕРКАЛО РЕАЛЬНОСТИ",
        mirrorOfReality: "приобретение оборудования для профессионалов",
      },
    },
  },
};

// Detect language from URL path
const getLanguageFromPath = () => {
  if (typeof window !== "undefined") {
    const path = window.location.pathname;
    if (path.startsWith("/ru")) return "ru";
    if (path.startsWith("/en")) return "en";
  }
  return "en";
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: getLanguageFromPath(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["path", "cookie", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
      caches: ["cookie", "localStorage"],
    },
  });

export default i18n;
