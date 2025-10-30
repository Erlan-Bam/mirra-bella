import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const currentLang = i18n.language === "ru" ? "ru" : "en";
  const otherLang = currentLang === "en" ? "ru" : "en";

  const changeLanguage = (lang: string) => {
    // Update URL path to match language
    const currentPath = window.location.pathname;
    let newPath = "";

    if (lang === "en") {
      // Remove /ru prefix or keep as is if already english
      newPath = currentPath.replace(/^\/ru/, "") || "/";
    } else {
      // Add /ru prefix
      if (currentPath.startsWith("/ru")) {
        newPath = currentPath;
      } else {
        newPath = currentPath === "/" ? "/ru" : `/ru${currentPath}`;
      }
    }

    window.location.href = newPath;
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-[15.52%] pt-[2.5%] md:pt-[2.7%] lg:pt-[4.5%] xl:pt-[4.73%] 2xl:pt-[4.73%]">
      {/* Header Container */}
      <div className="flex items-center justify-between gap-[2.6%]">
        {/* Logo - Responsive sizing */}
        <div className="w-[2.5vw] md:w-[2.8vw] lg:w-[3vw] xl:w-[3.2vw] 2xl:w-[3.33vw] flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="Mirra Bella Logo"
            className="w-full h-auto"
          />
        </div>

        {/* Navigation Menu - All BV Celine, 16px text */}
        <nav className="flex items-center gap-[2.6vw] font-bv-celine text-[0.7vw] md:text-[0.75vw] lg:text-[0.78vw] xl:text-[0.81vw] 2xl:text-[0.83vw] text-white uppercase tracking-normal flex-1 justify-center">
          <a
            href={currentLang === "en" ? "/en" : "/ru"}
            className="hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            {t("nav.about")}
          </a>

          {/* Services with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button className="flex items-center gap-[0.52vw] hover:opacity-80 transition-opacity whitespace-nowrap">
              {t("nav.services")}
              <span
                className={`w-0 h-0 border-l-[0.26vw] border-r-[0.26vw] border-l-transparent border-r-transparent transition-transform ${
                  isServicesDropdownOpen
                    ? "border-b-[0.47vw] border-b-white"
                    : "border-t-[0.47vw] border-t-white"
                }`}
              />
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute top-[2.08vw] left-0 bg-white/67 backdrop-blur-sm rounded-[0.21vw] px-[0.57vw] py-[0.52vw] min-w-[4.79vw] text-[0.7vw] md:text-[0.75vw] lg:text-[0.78vw] xl:text-[0.81vw] 2xl:text-[0.83vw] text-[#595959] font-bv-celine normal-case z-50">
                <div className="whitespace-nowrap">{t("nav.ourServices")}</div>
                <div className="whitespace-nowrap mt-[0.1vw]">
                  {t("nav.healthCoach")}
                </div>
              </div>
            )}
          </div>

          <a
            href="#education"
            className="hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            {t("nav.education")}
          </a>
          <a
            href="#shop"
            className="hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            {t("nav.shop")}
          </a>
          <a
            href="#blog"
            className="hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            {t("nav.blog")}
          </a>
          <a
            href="#contacts"
            className="hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            {t("nav.contacts")}
          </a>
        </nav>

        {/* Header Actions - Aligned properly */}
        <div className="flex items-center gap-[3.23vw] flex-shrink-0">
          {/* Book a Service Button - Transparent with blur like Figma */}
          <button className="relative w-[10.99vw] h-[1.7vw] md:h-[1.85vw] lg:h-[1.95vw] xl:h-[2.05vw] 2xl:h-[2.08vw] flex items-center justify-center font-bv-celine text-[0.7vw] md:text-[0.75vw] lg:text-[0.78vw] xl:text-[0.81vw] 2xl:text-[0.83vw] text-white uppercase hover:opacity-90 transition-opacity whitespace-nowrap overflow-hidden rounded-[1.56vw] backdrop-blur-[1.93vw] backdrop-filter bg-[rgba(197,126,129,0.3)]">
            <span className="relative z-10">{t("nav.bookService")}</span>
          </button>

          {/* Sign In Button - Transparent with blur like Figma */}
          <button className="relative w-[5.21vw] h-[1.7vw] md:h-[1.85vw] lg:h-[1.95vw] xl:h-[2.05vw] 2xl:h-[2.08vw] flex items-center justify-center font-bv-celine text-[0.7vw] md:text-[0.75vw] lg:text-[0.78vw] xl:text-[0.81vw] 2xl:text-[0.83vw] text-white uppercase hover:opacity-90 transition-opacity whitespace-nowrap overflow-hidden rounded-[1.56vw] backdrop-blur-[1.93vw] backdrop-filter bg-[rgba(217,217,217,0.16)]">
            <span className="relative z-10">{t("nav.signIn")}</span>
          </button>

          {/* Language Switcher - Arrow on same line as language */}
          <div
            className="relative w-[1.93vw] h-[1.7vw] md:h-[1.85vw] lg:h-[1.95vw] xl:h-[2.05vw] 2xl:h-[2.08vw] flex items-center justify-center"
            onMouseEnter={() => setIsLangDropdownOpen(true)}
            onMouseLeave={() => setIsLangDropdownOpen(false)}
          >
            {/* Current Language with arrow on same line */}
            <button className="w-full h-full flex items-center justify-center gap-[0.26vw]">
              <span className="font-avenir text-[0.7vw] md:text-[0.75vw] lg:text-[0.78vw] xl:text-[0.81vw] 2xl:text-[0.83vw] text-white leading-none">
                {currentLang}
              </span>
              <span className="w-0 h-0 border-l-[0.26vw] border-r-[0.26vw] border-t-[0.47vw] border-l-transparent border-r-transparent border-t-white" />
            </button>

            {/* Dropdown */}
            {isLangDropdownOpen && (
              <div className="absolute top-[1.56vw] left-[-0.26vw] w-[2.08vw] bg-white/67 backdrop-blur-sm rounded-[0.21vw] pt-[0.62vw] pb-[0.31vw] z-50">
                <button
                  onClick={() => changeLanguage(otherLang)}
                  className="w-full text-center font-avenir text-[0.7vw] md:text-[0.75vw] lg:text-[0.78vw] xl:text-[0.81vw] 2xl:text-[0.83vw] text-[#595959] hover:text-[#333] transition-colors leading-none"
                >
                  {otherLang}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
