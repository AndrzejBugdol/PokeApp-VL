import { useState, createContext, useContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../../utils/themes';

type DarkModeType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

type ToggleDarkModeProviderProps = {
  children: JSX.Element;
};

export const DarkThemeContext = createContext<DarkModeType>({
  isDarkMode: false,
  toggleDarkMode: () => undefined,
});

export const useDarkThemeContext = () => useContext(DarkThemeContext);

export const ToggleDarkModeProvider = ({ children }: ToggleDarkModeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    sessionStorage.setItem('DarkMode', isDarkMode.toString());
  };

  useEffect(() => {
    const DarkModeFromSession = sessionStorage.getItem('DarkMode');
    if (DarkModeFromSession !== null) {
      setIsDarkMode(!!DarkModeFromSession);
    }
  }, []);

  return (
    <DarkThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </DarkThemeContext.Provider>
  );
};
