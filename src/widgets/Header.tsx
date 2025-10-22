import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    // Navigate to the appropriate language page
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      let newPath = "/";

      // Remove both /ru and /en prefixes to get the clean path
      const cleanPath = currentPath.replace(/^\/(ru|en)/, "") || "/";

      if (lang === "ru") {
        newPath = cleanPath === "/" ? "/ru" : `/ru${cleanPath}`;
      } else {
        // For English, we can use /en prefix or just root
        newPath = cleanPath === "/" ? "/" : `/en${cleanPath}`;
      }

      window.location.href = newPath;
    }
    setIsLangOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 lg:px-12 xl:px-16 py-6 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href={i18n.language === "ru" ? "/ru" : "/"}
              className="flex items-center"
            >
              <img
                src="/mb-logo.svg"
                alt="Mirra Bella Logo"
                className="w-14 h-14 md:w-16 md:h-16 hover:opacity-80 transition-opacity duration-300"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            <a
              href="#about"
              className="text-xs xl:text-sm font-aboreto font-normal text-white hover:text-primary-pink transition-colors duration-300 tracking-[0.08em] uppercase"
            >
              {t("nav.about")}
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-xs xl:text-sm font-aboreto font-normal text-white hover:text-primary-pink transition-colors duration-300 flex items-center gap-1 tracking-[0.08em] uppercase">
                {t("nav.services")}
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-3 bg-white shadow-xl rounded-lg py-3 min-w-[220px] animate-fadeIn border border-gray-100">
                  <a
                    href="#services"
                    className="block px-5 py-2.5 text-sm font-afacad text-primary-brown hover:bg-gray-50 hover:text-primary-pink transition-colors duration-300"
                  >
                    {t("nav.ourServices")}
                  </a>
                  <a
                    href="#health-coach"
                    className="block px-5 py-2.5 text-sm font-afacad text-primary-brown hover:bg-gray-50 hover:text-primary-pink transition-colors duration-300"
                  >
                    {t("nav.healthCoach")}
                  </a>
                </div>
              )}
            </div>

            <a
              href="#education"
              className="text-xs xl:text-sm font-aboreto font-normal text-white hover:text-primary-pink transition-colors duration-300 tracking-[0.08em] uppercase"
            >
              {t("nav.education")}
            </a>
            <a
              href="#shop"
              className="text-xs xl:text-sm font-aboreto font-normal text-white hover:text-primary-pink transition-colors duration-300 tracking-[0.08em] uppercase"
            >
              {t("nav.shop")}
            </a>
            <a
              href="#blog"
              className="text-xs xl:text-sm font-aboreto font-normal text-white hover:text-primary-pink transition-colors duration-300 tracking-[0.08em] uppercase"
            >
              {t("nav.blog")}
            </a>
            <a
              href="#contacts"
              className="text-xs xl:text-sm font-aboreto font-normal text-white hover:text-primary-pink transition-colors duration-300 tracking-[0.08em] uppercase"
            >
              {t("nav.contacts")}
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Book a Service Button */}
            <button className="px-9 py-3 bg-white/10 text-white text-sm font-afacad font-medium rounded-full hover:bg-primary-pink transition-all duration-300 backdrop-blur-md border border-white/20 uppercase tracking-wider shadow-sm">
              {t("nav.bookService")}
            </button>

            {/* Sign In Button */}
            <button className="px-9 py-3 bg-white/5 border border-white/60 text-white text-sm font-afacad font-medium rounded-full hover:bg-white hover:text-primary-brown transition-all duration-300 backdrop-blur-md uppercase tracking-wider shadow-sm">
              {t("nav.signIn")}
            </button>

            {/* Language Selector */}
            <div className="relative ml-2">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="text-xl font-aboreto font-normal text-white transition-colors duration-300 flex items-center gap-2 hover:text-white/80 lowercase"
              >
                {i18n.language === "en" ? "en" : "ru"}
                <svg
                  className={`w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary-pink transition-transform duration-200 ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 12 8"
                />
              </button>
              {isLangOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 animate-fadeIn z-50">
                  <button
                    onClick={() =>
                      changeLanguage(i18n.language === "en" ? "ru" : "en")
                    }
                    className="w-[60px] h-[60px] bg-[#E8DCCF] rounded-[20px] text-xl font-aboreto font-normal text-primary-brown transition-colors duration-300 flex items-center justify-center hover:bg-[#d9cdbf] lowercase"
                  >
                    {i18n.language === "en" ? "ru" : "en"}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-primary-pink transition"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4 border-t border-white/20 pt-6 animate-fadeIn bg-black/80 backdrop-blur-md rounded-lg px-6 -mx-4">
            <a
              href="#about"
              className="block text-sm font-aboreto font-normal text-white hover:text-primary-pink transition uppercase tracking-[0.08em]"
            >
              {t("nav.about")}
            </a>
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between text-sm font-aboreto font-normal text-white hover:text-primary-pink transition uppercase tracking-[0.08em]"
              >
                {t("nav.services")}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="mt-3 ml-4 space-y-3">
                  <a
                    href="#services"
                    className="block text-sm font-afacad text-white/80 hover:text-primary-pink transition"
                  >
                    {t("nav.ourServices")}
                  </a>
                  <a
                    href="#health-coach"
                    className="block text-sm font-afacad text-white/80 hover:text-primary-pink transition"
                  >
                    {t("nav.healthCoach")}
                  </a>
                </div>
              )}
            </div>
            <a
              href="#education"
              className="block text-sm font-aboreto font-normal text-white hover:text-primary-pink transition uppercase tracking-[0.08em]"
            >
              {t("nav.education")}
            </a>
            <a
              href="#shop"
              className="block text-sm font-aboreto font-normal text-white hover:text-primary-pink transition uppercase tracking-[0.08em]"
            >
              {t("nav.shop")}
            </a>
            <a
              href="#blog"
              className="block text-sm font-aboreto font-normal text-white hover:text-primary-pink transition uppercase tracking-[0.08em]"
            >
              {t("nav.blog")}
            </a>
            <a
              href="#contacts"
              className="block text-sm font-aboreto font-normal text-white hover:text-primary-pink transition uppercase tracking-[0.08em]"
            >
              {t("nav.contacts")}
            </a>

            {/* Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-white/10 mt-2">
              {/* Language Selector - Elegant Design */}
              <div className="flex justify-center">
                <button
                  onClick={() =>
                    changeLanguage(i18n.language === "en" ? "ru" : "en")
                  }
                  className="px-6 py-2 bg-[#E8DCCF] text-primary-brown text-base font-aboreto font-normal rounded-[15px] transition-all duration-300 hover:bg-[#d9cdbf] hover:shadow-md lowercase min-w-[80px] shadow-sm"
                >
                  {i18n.language === "en" ? "ru" : "en"}
                </button>
              </div>

              <button className="w-full px-10 py-3.5 bg-primary-pink text-white text-sm font-afacad font-normal rounded-full hover:bg-primary-pink/90 transition-all duration-300 shadow-lg uppercase tracking-[0.12em]">
                {t("nav.bookService")}
              </button>
              <button className="w-full px-10 py-3.5 bg-white/5 border border-white/60 text-white text-sm font-afacad font-normal rounded-full hover:bg-white hover:text-primary-brown transition-all duration-300 backdrop-blur-md uppercase tracking-[0.12em] shadow-sm">
                {t("nav.signIn")}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
