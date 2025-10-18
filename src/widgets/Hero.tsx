import React from "react";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/woman-procedure.png"
          alt="Beauty Studio"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-6 lg:px-12 xl:px-16 text-white pt-42 md:pt-46 pb-24 md:pb-32">
        <div className="max-w-xl lg:max-w-2xl">
          <h2 className="font-aboreto text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 tracking-[0.12em] uppercase leading-tight whitespace-nowrap">
            {t("hero.title")}
            <br />
            {t("hero.subtitle")} <br />
            {t("hero.location")}
          </h2>
          <p className="font-afacad text-base sm:text-lg md:text-xl mb-10 md:mb-12 max-w-lg leading-relaxed font-light">
            {t("hero.description")}
          </p>
          <button className="px-10 py-3.5 md:px-12 md:py-4 bg-primary-pink text-white font-afacad font-normal text-sm md:text-base rounded-full hover:bg-primary-pink/90 transition-all duration-300 shadow-lg uppercase tracking-[0.12em]">
            {t("hero.contactUs")}
          </button>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-8 md:bottom-14 right-[12%] md:right-[20%] z-10 flex flex-row gap-4">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all duration-300 shadow-lg"
          aria-label="YouTube"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all duration-300 shadow-lg"
          aria-label="YouTube"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all duration-300 shadow-lg"
          aria-label="YouTube"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
