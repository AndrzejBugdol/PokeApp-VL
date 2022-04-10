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
    background: string;
    shadow:string;
}

export const DarkThemeContext = createContext<DarkModeType>({
    isDarkMode: false,
    toggleDarkMode: () => undefined
});

export const useDarkThemeContext = () => useContext(DarkThemeContext)

const darkTheme: ThemeType = {
    color: "white",
    background: "rgb(60, 60, 60)",
    shadow:"0px 5px 5px white"
}

const lightTheme: ThemeType = {
    color: "rgb(60, 60, 60)",
    background: "white",
    shadow: "0px 5px 5px #00000029"
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