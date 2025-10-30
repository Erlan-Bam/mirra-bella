import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import BusinessUnitLogo from "@shared/ui/BusinessUnitLogo";

interface BusinessUnit {
  key: string;
  nameKey: string;
  threshold: number;
  variant: "pink" | "yellow" | "green" | "blue" | "purple";
}

interface LogoAnimationProps {
  animationData: any;
}

const businessUnits: BusinessUnit[] = [
  {
    key: "logoAnimation.mirrorOfBeauty",
    nameKey: "logoAnimation.mirrorOfBeautyName",
    threshold: 0.1,
    variant: "pink",
  },
  {
    key: "logoAnimation.instituteOfAesthetics",
    nameKey: "logoAnimation.instituteOfAestheticsName",
    threshold: 0.25,
    variant: "yellow",
  },
  {
    key: "logoAnimation.mirrorOfHealth",
    nameKey: "logoAnimation.mirrorOfHealthName",
    threshold: 0.4,
    variant: "green",
  },
  {
    key: "logoAnimation.beautyInDrop",
    nameKey: "logoAnimation.beautyInDropName",
    threshold: 0.55,
    variant: "blue",
  },
  {
    key: "logoAnimation.mirrorOfReality",
    nameKey: "logoAnimation.mirrorOfRealityName",
    threshold: 0.7,
    variant: "purple",
  },
];

export default function LogoAnimation({ animationData }: LogoAnimationProps) {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<any>(null);
  const [visibleUnits, setVisibleUnits] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = rect.height;

      // Calculate scroll progress (0 to 1) through the container
      const scrollTop = -rect.top;
      const scrollHeight = containerHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrollTop / scrollHeight));

      setScrollProgress(progress);

      // Update Lottie animation frame based on scroll
      if (lottieRef.current) {
        const totalFrames = lottieRef.current.getDuration(true);
        const targetFrame = Math.floor(progress * totalFrames);
        lottieRef.current.goToAndStop(targetFrame, true);
        setCurrentFrame(targetFrame);
      }

      // Determine which business units should be visible
      let visibleCount = 0;
      for (let i = 0; i < businessUnits.length; i++) {
        if (progress >= businessUnits[i].threshold) {
          visibleCount = i + 1;
        }
      }
      setVisibleUnits(visibleCount);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[300vh] bg-primary-white"
    >
      {/* Sticky container for logo and text */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center px-4">
        {/* Lottie Animation */}
        <div className="w-[60%] max-w-[280px] aspect-square mb-8">
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={false}
            autoplay={false}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Business Units Container - Mobile stacked layout */}
        <div className="w-full max-w-[90%] mx-auto">
          {/* Business Unit Items - Stacked vertically on mobile */}
          <div className="flex flex-col items-center gap-8">
            {businessUnits.map((unit, index) => (
              <div
                key={unit.key}
                className={`flex flex-col items-center w-full transition-all duration-700 ${
                  index < visibleUnits
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Business Unit Logo - Each shows different frame */}
                <BusinessUnitLogo
                  animationData={animationData}
                  variant={unit.variant}
                  isVisible={index < visibleUnits}
                  index={index}
                  isMobile={true}
                />

                {/* Business Unit Name */}
                <h3 className="font-bv-celine text-xs leading-tight tracking-[0.2em] text-center text-[#D4AF37] mb-2 uppercase">
                  {t(unit.nameKey)}
                </h3>

                {/* Text description */}
                <p className="font-avenir text-[13px] leading-relaxed text-center text-[#5f5b52] max-w-[300px]">
                  {t(unit.key)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicator (optional, for debugging) */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
          Progress: {Math.round(scrollProgress * 100)}% | Units: {visibleUnits}
        </div> */}
      </div>
    </div>
  );
}
