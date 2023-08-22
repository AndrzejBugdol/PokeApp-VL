import React, { useState, useEffect } from 'react';

import { Pokemon } from '../../types';
import { PokemonType } from '../../utils/colorsUtils';
import TypedPokeList from './TypedPokeList';
import TypeFilter from './TypeFilter';

type PokeListProps = {
  listOfPokemons: Pokemon[];
};

const PokeList = ({ listOfPokemons }: PokeListProps) => {
  const [typeValue, setTypeValue] = useState<string[]>([]);
  const [activePokemons, setActivePokemons] = useState<Pokemon[]>([]);

  const addTypes = (type: PokemonType) => {
    if (typeValue.includes(type)) {
      setTypeValue((prev) => prev.filter((e) => e !== type));
    } else {
      setTypeValue((prev) => [...prev, type]);
    }
  };

  const clearTypes = () => {
    setTypeValue([]);
  };

  useEffect(() => {
    if (typeValue.length > 0) {
      setActivePokemons(listOfPokemons.filter((e) => e.type.some((type) => typeValue.includes(type))));
    } else {
      setActivePokemons(listOfPokemons);
    }
  }, [typeValue, listOfPokemons]);

  return (
    <>
      <TypeFilter
        callback={addTypes}
        clearAll={clearTypes}
      />
      <TypedPokeList listOfPokemons={activePokemons} />
    </>
  );
};

export default PokeList;
