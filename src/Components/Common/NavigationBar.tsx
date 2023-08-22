import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useDarkThemeContext } from '../ToggleDarkModeProvider';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  background: white;
  border-bottom: 2px solid black;
  transition: all 0.5s linear;
`;
const Header = styled.h1`
  font-size: 2rem;
  font-family: 'Overpass';
  font-weight: 500;
  color: black;
  padding-left: 2rem;
`;

const Ul = styled.ul`
  display: flex;
  padding-right: 2rem;
  gap: 3rem;
  align-items: center;
`;
const Icon = styled.i`
  font-size: 1.5rem;
  -webkit-background-clip: text !important;

  &:hover {
    cursor: pointer;
  }
`;

const NavigationBar = () => {
  const DarkThemeContext = useDarkThemeContext();

  return (
    <Nav>
      <Header>PokeApp</Header>
      <Ul>
        <li>
          <Link to="/PokeApp-VL">Home</Link>
        </li>
        <li>
          <Link to="/PokeApp-VL/about">About</Link>
        </li>
        <li>
          {DarkThemeContext.isDarkMode ? (
            <Icon
              style={{ WebkitTextFillColor: 'rgba(0,0,0, 0.7)' }}
              onClick={DarkThemeContext.toggleDarkMode}
              className="fa fa-certificate"
            />
          ) : (
            <Icon
              style={{ WebkitTextFillColor: 'rgba(0,0,0, 0.7)' }}
              onClick={DarkThemeContext.toggleDarkMode}
              className="fa fa-moon-o"
            />
          )}
        </li>
      </Ul>
    </Nav>
  );
};

export default NavigationBar;
