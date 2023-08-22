import { CardBackgroundColor, PokemonType } from '../../utils/colorsUtils';
import { Stamp } from './styles';

type TypeComponentProps = {
  type: PokemonType;
};

const TypeComponent = ({ type }: TypeComponentProps) => {
  const color: string = CardBackgroundColor[type];
  return <Stamp background={color}>{type}</Stamp>;
};

export default TypeComponent;
