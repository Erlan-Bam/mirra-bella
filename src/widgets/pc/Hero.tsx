import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Gradient */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img
            src="/images/hero-woman.png"
            alt="Beauty Treatment"
            className="absolute top-0 left-0 w-full h-[113.3%] object-cover object-top"
          />
          {/* Gradient Overlay - stronger at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between px-[15.52%] pt-[16%] md:pt-[17%] lg:pt-[18%] xl:pt-[18.5%] 2xl:pt-[18.75%] pb-[5%] md:pb-[5.2%] lg:pb-[5.4%] xl:pb-[5.6%] 2xl:pb-[5.73%]">
        <div>
          {/* Main Title */}
          <h1 className="font-bv-celine text-[2.8vw] md:text-[3vw] lg:text-[3.15vw] xl:text-[3.25vw] 2xl:text-[3.33vw] leading-[1.15] text-white uppercase mb-[2.5vw] md:mb-[2.7vw] lg:mb-[2.9vw] xl:mb-[3vw] 2xl:mb-[3.13vw]">
            {t("hero.title")}
            <br />
            {t("hero.subtitle")}
            <br />
            {t("hero.location")}
          </h1>

          {/* Description */}
          <p className="text-[1vw] md:text-[1.05vw] lg:text-[1.12vw] xl:text-[1.17vw] 2xl:text-[1.2vw] leading-[1.43] text-white max-w-[31vw] mb-[3vw] md:mb-[3.2vw] lg:mb-[3.4vw] xl:mb-[3.5vw] 2xl:mb-[3.65vw] tracking-[0.012em]">
            <span className="font-avenir">{t("hero.description")}</span>
          </p>

          {/* Contact Button */}
          <button className="relative w-[10vw] md:w-[10.5vw] lg:w-[11vw] xl:w-[11.25vw] 2xl:w-[11.46vw] h-[2.4vw] md:h-[2.55vw] lg:h-[2.7vw] xl:h-[2.8vw] 2xl:h-[2.86vw] flex items-center justify-center font-bv-celine text-[0.9vw] md:text-[0.95vw] lg:text-[0.99vw] xl:text-[1.02vw] 2xl:text-[1.04vw] text-white uppercase hover:opacity-90 transition-opacity">
            <div className="absolute inset-0 bg-[#c57e81] rounded-[1.56vw] backdrop-blur-[1.93vw]" />
            <span className="relative z-10">{t("hero.contactUs")}</span>
          </button>
        </div>

        {/* Social Media Icons - Bottom Right */}
        <div className="absolute right-[10%] md:right-[9%] lg:right-[8.5%] xl:right-[8.2%] 2xl:right-[7.92%] bottom-[6%] md:bottom-[5.5%] lg:bottom-[5.2%] xl:bottom-[5.1%] 2xl:bottom-[5.21%] z-20 flex gap-[0.8vw] md:gap-[0.85vw] lg:gap-[0.89vw] xl:gap-[0.92vw] 2xl:gap-[0.94vw]">
          {/* YouTube */}
          <a
            href="#"
            className="w-[1.25vw] md:w-[1.32vw] lg:w-[1.38vw] xl:w-[1.43vw] 2xl:w-[1.46vw] h-[1.25vw] md:h-[1.32vw] lg:h-[1.38vw] xl:h-[1.43vw] 2xl:h-[1.46vw] rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="YouTube"
          >
            <svg
              className="w-[0.62vw] md:w-[0.66vw] lg:w-[0.69vw] xl:w-[0.71vw] 2xl:w-[0.73vw] h-[0.62vw] md:h-[0.66vw] lg:h-[0.69vw] xl:h-[0.71vw] 2xl:h-[0.73vw]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="#"
            className="w-[1.25vw] md:w-[1.32vw] lg:w-[1.38vw] xl:w-[1.43vw] 2xl:w-[1.46vw] h-[1.25vw] md:h-[1.32vw] lg:h-[1.38vw] xl:h-[1.43vw] 2xl:h-[1.46vw] rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Instagram"
          >
            <svg
              className="w-[0.62vw] md:w-[0.66vw] lg:w-[0.69vw] xl:w-[0.71vw] 2xl:w-[0.73vw] h-[0.62vw] md:h-[0.66vw] lg:h-[0.69vw] xl:h-[0.71vw] 2xl:h-[0.73vw]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="#"
            className="w-[1.25vw] md:w-[1.32vw] lg:w-[1.38vw] xl:w-[1.43vw] 2xl:w-[1.46vw] h-[1.25vw] md:h-[1.32vw] lg:h-[1.38vw] xl:h-[1.43vw] 2xl:h-[1.46vw] rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Facebook"
          >
            <svg
              className="w-[0.62vw] md:w-[0.66vw] lg:w-[0.69vw] xl:w-[0.71vw] 2xl:w-[0.73vw] h-[0.62vw] md:h-[0.66vw] lg:h-[0.69vw] xl:h-[0.71vw] 2xl:h-[0.73vw]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
