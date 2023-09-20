import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';

export default function ThemeMode() {
//  
  const themeModeStorage = localStorage.getItem("themeMode");
  const faviconModeStorage = localStorage.getItem("favicon");
//
//
  const [themeMode, setThemeMode] = useState(`${themeModeStorage}`);
  const [favicon, setFavicon] = useState(`${faviconModeStorage}`);
//
//
useEffect(() => {
  if (themeMode === "dark" || themeMode === "light") {
  localStorage.setItem("themeMode", `${themeMode}`);
  localStorage.setItem("favicon", `${favicon}`);
  document.querySelector("html")?.setAttribute("data-theme", `${themeMode}`);
  }else{
    localStorage.setItem("themeMode", "dark");
    localStorage.setItem("favicon", "icon-st-b.svg");
    document.querySelector("html")?.setAttribute("data-theme", "dark");
    setThemeMode("dark");
    setFavicon("icon-st-b.svg");
  }
}, [themeMode, favicon]);
//
//
  const ThemeModeToggle = () => {
    const themeModeStorage = localStorage.getItem("themeMode");
    if (themeModeStorage === "dark") {
      setFavicon("icon-st-w.svg");
      setThemeMode(`light`);      
    } else {
      setFavicon("icon-st-b.svg");
      setThemeMode(`dark`);   
    }
  };
//
//
  return (
    <>
    <Helmet>
    <link rel="icon" type="image/svg+xml" href={`./assets/${favicon}`} />
    </Helmet>
    <a>
      <button 
      type="button" 
      className={`theme ${themeMode}`} 
      onClick={ThemeModeToggle} 
      />
      </a>
    </>
  );
}
