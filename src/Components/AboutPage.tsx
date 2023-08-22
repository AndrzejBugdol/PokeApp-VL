import React from 'react';
import styled from 'styled-components';

import { Container } from './MainPageStyles';

const H1 = styled.h1`
  font-size: 4rem;
  font-family: 'Overpass';
  font-weight: 500;
  color: ${(props) => props.theme.color};
  margin: 5% 0;
  min-width: 20rem;
  text-align: center;
`;
const H5 = styled.h5`
  font-family: 'Overpass';
  font-size: 2rem;
  font-weight: 500;
  color: ${(props) => props.theme.color};
  padding: 10px 0;
  line-height: 3rem;
  margin-bottom: 5%;
  text-align: center;
`;

const AboutPage = () => {
  return (
    <Container>
      <H1>Hi there!</H1>
      <H5>
        Welcome to my PokeApp. Simple React application to explore the world of Pokemons! <br />
        This app has been created for the recruitment purpose.
        <br />
        <br />
        Used Technologies:
        <br />
        -Typescript
        <br />
        -Styled Components
        <br />
        -React Router <br />
      </H5>
    </Container>
  );
};

export default AboutPage;
