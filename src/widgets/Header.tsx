import { useEffect, useState } from "react";
import HeaderPC from "./pc/Header";
import HeaderMob from "./mob/Header";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <HeaderMob /> : <HeaderPC />;
}
