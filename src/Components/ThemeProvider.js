import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import darkMode from "../assets/dark-mode.png";
const ThemeProvider = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const contextValue = {
    isDarkMode,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <label className="switch">
        <input onClick={toggleTheme} type="checkbox" className="input__check" />
        <span className="slider"></span>
        <img className="toggleLogo" src={darkMode}></img>
      </label>
      {children}

    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
