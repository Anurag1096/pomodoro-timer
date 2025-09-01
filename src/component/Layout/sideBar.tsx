import SideBarDesktop from "./sideBarDesktop";
import SideBarMobile from "./SideBarMobile";
import { useState, useEffect } from "react";

const SideBar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 634);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>{isMobile ? <SideBarMobile /> : <SideBarDesktop />}</div>;
};

export default SideBar;
