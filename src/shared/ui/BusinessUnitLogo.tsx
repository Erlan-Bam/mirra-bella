import { useEffect, useRef } from "react";
import Lottie from "lottie-react";

interface BusinessUnitLogoProps {
  animationData: any;
  variant: "pink" | "yellow" | "green" | "blue" | "purple";
  isVisible: boolean;
  index: number;
  isMobile?: boolean;
}

// Each variant shows a specific frame of the animation where that color is at 100% opacity
const variantFrames = {
  pink: 15, // Frame where pink ring is at maximum opacity (100%)
  yellow: 45, // Frame where yellow ring is at maximum opacity (100%)
  green: 75, // Frame where green ring is at maximum opacity (100%)
  blue: 105, // Frame where blue ring is at maximum opacity (100%)
  purple: 135, // Frame where purple ring is at maximum opacity (100%)
};

export default function BusinessUnitLogo({
  animationData,
  variant,
  isVisible,
  index,
  isMobile = false,
}: BusinessUnitLogoProps) {
  const lottieRef = useRef<any>(null);
  const targetFrame = variantFrames[variant];

  // Set to specific frame for this variant when visible
  useEffect(() => {
    if (lottieRef.current && isVisible) {
      lottieRef.current.goToAndStop(targetFrame, true);
    }
  }, [isVisible, targetFrame]);

  return (
    <div
      className={`${
        isMobile ? "w-[180px] h-[75px]" : "w-[11.46vw] h-[4.77vw]"
      } flex items-center justify-center transition-transform duration-700 ${
        isMobile ? "mb-3" : "mb-[1.85vw]"
      } ${isVisible ? "scale-100" : "scale-90"}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      <div className="relative w-full h-full">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}
