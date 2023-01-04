import React, { useState, useEffect } from 'react';
import { Pokemon } from '../../model';
import { TypeFilter } from './TypeFilter';
import { PokemonType } from '../../Utils/ColorsUtils';
import { TypedPokeList } from './TypedPokeList';

type Props = {
  listOfPokemons: Pokemon[];
};

export const PokeList = ({ listOfPokemons }: Props) => {
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
