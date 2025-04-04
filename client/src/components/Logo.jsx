import { useState, useEffect } from 'react';
import logo from '../assets/images/AutoSenseLogo.svg';
import darkLogo from '../assets/images/LogoDarkTheme.svg';
import { checkDefaultTheme } from '../App';

const Logo = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDarkTheme(checkDefaultTheme());
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <img src={isDarkTheme ? logo : darkLogo} alt="autosense" className="logo" />
  );
};

export default Logo;
