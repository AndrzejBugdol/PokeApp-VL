import { CardBackgroundColor, PokemonType } from '../../../utils/colorsUtils';
import { Badge } from './styles';

type TypeBadgeProps = {
  type: PokemonType;
};

const TypeBadge = ({ type }: TypeBadgeProps) => {
  const color: string = CardBackgroundColor[type];
  return <Badge background={color}>{type}</Badge>;
};

export default TypeBadge;
