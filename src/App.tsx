import React from 'react';
import './App.css';
import { Footer } from './Components/Footer';
import { MainPage } from './Components/MainPage';
import {  BrowserRouter as Router  , Route , Routes} from "react-router-dom";
import { NavigationBar } from './Components/NavigationBar';
import { AboutPage } from './Components/AboutPage'
import { ToggleDarkModeProvider } from './Components/ToggleDarkModeProvider';




export const App: React.FC = () => {
  return (
    <ToggleDarkModeProvider>
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path='/PokeApp-VL' element={<MainPage/>}/>
          <Route path='/PokeApp-VL/about' element={<AboutPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </ToggleDarkModeProvider>
  )
}