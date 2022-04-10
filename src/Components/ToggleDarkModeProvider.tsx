import React, {useState,createContext,useContext} from 'react'
import { ThemeProvider } from "styled-components";

type DarkModeType = {
    isDarkMode: boolean,
    toggleDarkMode: () => void
}

type Props = {
    children:JSX.Element
}

type ThemeType = {
    color: string;
    background: string
}

export const DarkThemeContext = createContext<DarkModeType>({
    isDarkMode: false,
    toggleDarkMode: () => undefined
});

export const useDarkThemeContext = () => useContext(DarkThemeContext)

const darkTheme: ThemeType = {
    color: "white",
    background: "rgba(0,0,0, 0.7)",
}

const lightTheme: ThemeType = {
    color: "rgba(0,0,0, 0.7)",
    background: "white",
}
export const ToggleDarkModeProvider:React.FC<Props> = ({ children }:Props) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    

    const toggleDarkMode = () =>{
        setIsDarkMode(!isDarkMode)
    }

    return (
    <DarkThemeContext.Provider value={{isDarkMode,toggleDarkMode}}>
        <ThemeProvider theme={isDarkMode?darkTheme:lightTheme}>
            {children}
        </ThemeProvider>
    </DarkThemeContext.Provider>
  )
}