import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Logo = ({ className = "", size = "w-12 h-12" }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${size} ${className} relative`}>
      <div className={`w-full h-full rounded-lg p-1 ${
        isDarkMode ? 'bg-white/10' : 'bg-transparent'
      }`}>
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="Mitanshu Sarode Logo"
          className="w-full h-full object-contain"
          style={{
            filter: isDarkMode 
              ? 'brightness(1.3) contrast(1.1)' // Slightly brightens the logo for dark mode
              : 'none' // Keeps original colors in light mode
          }}
        />
      </div>
    </div>
  );
};

export default Logo;
