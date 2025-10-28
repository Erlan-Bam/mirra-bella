import { useEffect, useState } from "react";
import HeroPC from "./pc/Hero";
import HeroMob from "./mob/Hero";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <HeroMob /> : <HeroPC />;
}
