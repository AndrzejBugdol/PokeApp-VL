import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Nav = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:10vh;
background:white;
box-shadow:0px 3px 6px #00000029;
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
`


export const NavigationBar = () => {
  return (
    <Nav>
        <Header>PokeApp</Header>
        <Ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </Ul>
    </Nav>
  )
}