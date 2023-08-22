import { Container } from '../MainPage/styles';
import { H1, H5 } from './styles';

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
