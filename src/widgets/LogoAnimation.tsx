import { useState, useEffect } from "react";
import LogoAnimationPC from "./pc/LogoAnimation.tsx";
import LogoAnimationMob from "./mob/LogoAnimation.tsx";

export default function LogoAnimation() {
  const [isMobile, setIsMobile] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Load animation data
    fetch("/lottie.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!animationData) {
    return null; // or a loading spinner
  }

  return isMobile ? (
    <LogoAnimationMob animationData={animationData} />
  ) : (
    <LogoAnimationPC animationData={animationData} />
  );
}
