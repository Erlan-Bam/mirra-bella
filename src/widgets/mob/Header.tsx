import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const currentLang = i18n.language === "ru" ? "ru" : "en";
  const otherLang = currentLang === "en" ? "ru" : "en";

  const changeLanguage = (lang: string) => {
    const currentPath = window.location.pathname;
    let newPath = "";

    if (lang === "en") {
      newPath = currentPath.replace(/^\/ru/, "") || "/";
    } else {
      if (currentPath.startsWith("/ru")) {
        newPath = currentPath;
      } else {
        newPath = currentPath === "/" ? "/ru" : `/ru${currentPath}`;
      }
    }

    window.location.href = newPath;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-black/50 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="w-12">
          <img
            src="/images/logo.png"
            alt="Mirra Bella Logo"
            className="w-full h-auto"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl z-50"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md p-6 flex flex-col gap-4 font-bv-celine text-base text-white uppercase">
          <a href={currentLang === "en" ? "/en" : "/ru"} className="py-2">
            {t("nav.about")}
          </a>
          <a href="#services" className="py-2">
            {t("nav.services")}
          </a>
          <a href="#education" className="py-2">
            {t("nav.education")}
          </a>
          <a href="#shop" className="py-2">
            {t("nav.shop")}
          </a>
          <a href="#blog" className="py-2">
            {t("nav.blog")}
          </a>
          <a href="#contacts" className="py-2">
            {t("nav.contacts")}
          </a>

          <div className="border-t border-white/20 pt-4 mt-2">
            <button className="w-full py-3 bg-gradient-to-r from-[#D4A5A7] to-[#C57E81] rounded-full text-sm">
              {t("nav.bookService")}
            </button>
            <button className="w-full py-3 mt-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
              {t("nav.signIn")}
            </button>
          </div>

          {/* Language Switcher */}
          <div className="flex gap-4 justify-center pt-4 border-t border-white/20">
            <button
              onClick={() => changeLanguage("en")}
              className={`px-4 py-2 rounded ${
                currentLang === "en" ? "bg-white/30" : "bg-white/10"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("ru")}
              className={`px-4 py-2 rounded ${
                currentLang === "ru" ? "bg-white/30" : "bg-white/10"
              }`}
            >
              RU
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
