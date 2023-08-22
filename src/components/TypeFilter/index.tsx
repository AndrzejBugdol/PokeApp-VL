import { useFiltersContext } from '../../services/FiltersContext';
import { CardBackgroundColor, PokemonType } from '../../utils/colorsUtils';
import { TypeContainer, TypeButton } from './styles';

const ListOfTypes = Object.keys(CardBackgroundColor) as PokemonType[];

const TypeFilter = () => {
  const { typesValue, setTypesValue, clearTypesValue } = useFiltersContext();

  const handleClick = (type: PokemonType) => {
    setTypesValue(type);
  };

  const handleclearAll = () => {
    clearTypesValue();
  };

  return (
    <TypeContainer>
      {ListOfTypes.map((type) => (
        <TypeButton
          background={typesValue.includes(type) ? CardBackgroundColor[type] : '#f3efef'}
          onClick={() => handleClick(type)}
          key={type}>
          {type}
        </TypeButton>
      ))}
      <TypeButton
        background={CardBackgroundColor.unknown}
        onClick={() => handleclearAll()}>
        Clear
      </TypeButton>
    </TypeContainer>
  );
};

export default TypeFilter;
