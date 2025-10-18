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

      {/* Slider Dots */}
      <div className="absolute bottom-10 md:bottom-12 right-8 md:right-12 z-10 flex flex-col gap-3">
        <button
          className="w-3 h-3 rounded-full bg-white shadow-lg"
          aria-label="Slide 1"
        ></button>
        <button
          className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors duration-300 shadow-lg"
          aria-label="Slide 2"
        ></button>
        <button
          className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors duration-300 shadow-lg"
          aria-label="Slide 3"
        ></button>
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
