import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ThemeSwitcher.css";

const ThemeSwitcher = ({ children }) => {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await axios.get("https://stackoverflow-suun-api.vercel.app/api/getTime");
        const currentTime = response.data.currentTime;
        setIsNight(currentTime < 6 || currentTime >= 18);
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };

    fetchTime();
  }, []);

  const theme = isNight ? "dark-theme" : "light-theme";

  return <div className={`theme-switcher ${theme}`}>{children}</div>;
};

export default ThemeSwitcher;
