import { useState, useEffect } from 'react';

import { Pokemon } from '../../types';
import Card from '../Card';
import SearchBar from '../SearchBar';
import { PokesList, P } from './styles';

type TypedPokeListProps = {
  listOfPokemons: Pokemon[];
};

const TypedPokeList = ({ listOfPokemons }: TypedPokeListProps) => {
  const [searchValue, setSearchVal] = useState<string>('');
  const [activePokemons, setActivePokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (searchValue.length > 1) {
      setActivePokemons(listOfPokemons.filter((e) => e.name.toLowerCase().includes(searchValue.toLowerCase())));
    } else {
      setActivePokemons(listOfPokemons);
    }
  }, [searchValue, listOfPokemons]);

  return (
    <>
      <SearchBar setSearchValue={setSearchVal} />
      <PokesList>
        {activePokemons.length === 0 ? (
          <P>
            No pokemons found for selected values
            <br />
            Try loading some more
          </P>
        ) : null}
        {activePokemons.map((element) => (
          <Card
            key={element.id}
            pokemon={element}
          />
        ))}
      </PokesList>
    </>
  );
};

export default TypedPokeList;
