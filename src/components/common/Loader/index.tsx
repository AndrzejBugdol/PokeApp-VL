import pokeball from '../../assets/Pokeball.png';
import { LoadingDiv, Logo } from './styles';

const Loader = () => {
  return (
    <LoadingDiv>
      <Logo
        src={pokeball}
        alt="Pokeball"
      />
    </LoadingDiv>
  );
};

export default Loader;
