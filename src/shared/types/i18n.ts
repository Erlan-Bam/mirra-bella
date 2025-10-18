// Translation keys type for type safety
export interface Translations {
  nav: {
    about: string;
    services: string;
    education: string;
    shop: string;
    blog: string;
    contacts: string;
    bookService: string;
    signIn: string;
    ourServices: string;
    healthCoach: string;
  };
  hero: {
    title: string;
    subtitle: string;
    location: string;
    description: string;
    contactUs: string;
  };
}

// Supported languages
export type Language = "en" | "ru";

// Language display names
export const LANGUAGES: Record<Language, string> = {
  en: "English",
  ru: "Русский",
};
