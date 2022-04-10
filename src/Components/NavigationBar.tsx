import React,{useContext} from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { useDarkThemeContext } from './ToggleDarkModeProvider'

const Nav = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:10vh;
background:white;
box-shadow:0px 3px 6px #00000029;
margin-bottom:1vh;
`
const Header = styled.h1`
font-size: 2rem;
font-family:"Overpass";
font-weight: 500;
color: black;
padding-left:2rem;
`

const Ul = styled.ul`
display:flex;
padding-right:2rem;
gap:3rem;
align-items: center
`
const Icon = styled.i`
font-size: 1.5rem;
  -webkit-background-clip: text !important;
`

export const NavigationBar:React.FC = () => {
  const DarkThemeContext = useDarkThemeContext();

  return (
    <Nav>
        <Header>PokeApp</Header>
        <Ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            {DarkThemeContext.isDarkMode?
            <Icon style={{WebkitTextFillColor: "rgba(0,0,0, 0.7)"}} onClick={DarkThemeContext.toggleDarkMode} className="fa fa-certificate"></Icon>:
            <Icon style={{WebkitTextFillColor: "rgba(0,0,0, 0.7)"}} onClick={DarkThemeContext.toggleDarkMode} className="fa fa-moon-o"></Icon>
          }
          </li>
        </Ul>
    </Nav>
  )
}