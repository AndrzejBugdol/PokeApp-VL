import { useState } from 'react';

import { CardBackgroundColor, PokemonType } from '../../utils/colorsUtils';
import { TypeContainer, TypeButton } from './styles';

type TypeFilterProps = {
  callback: (type: PokemonType) => void;
  clearAll: () => void;
};

const ListOfTypes = Object.keys(CardBackgroundColor) as PokemonType[];

const TypeFilter = ({ callback, clearAll }: TypeFilterProps) => {
  const [activeFilters, setactiveFilters] = useState<PokemonType[]>([]);

  const handleCallback = (type: PokemonType) => {
    if (activeFilters.includes(type)) {
      setactiveFilters((prev) => prev.filter((e) => e !== type));
    } else {
      setactiveFilters((prev) => [...prev, type]);
    }
    callback(type);
  };

  const handleclearAll = () => {
    setactiveFilters([]);
    clearAll();
  };

  return (
    <TypeContainer>
      {ListOfTypes.map((type) => (
        <TypeButton
          background={activeFilters.includes(type) ? CardBackgroundColor[type] : '#f3efef'}
          onClick={() => handleCallback(type)}
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
