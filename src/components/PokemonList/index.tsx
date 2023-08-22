import { useMemo } from 'react';

import { useFiltersContext } from '../../services/FiltersContext';
import { Pokemon } from '../../types';
import Card from '../Card';
import SearchBar from '../SearchFilter';
import TypeFilter from '../TypeFilter';
import { P, PokesList } from './styles';

type PokeListProps = {
  listOfPokemons: Pokemon[];
};

const filteredPokemons = (searchValue: string, types: string[], pokemons: Pokemon[]): Pokemon[] => {
  let result: Pokemon[] = [];

  if (types.length > 0 && searchValue.length > 1) {
    result = pokemons.filter(
      (e) => e.type.some((type) => types.includes(type)) && e.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
  } else if (types.length > 0 && searchValue.length < 1) {
    result = pokemons.filter((e) => e.type.some((type) => types.includes(type)));
  } else if (types.length === 0 && searchValue.length > 1) {
    result = pokemons.filter((e) => e.name.toLowerCase().includes(searchValue.toLowerCase()));
  } else {
    result = pokemons;
  }

  return result;
};

const PokeList = ({ listOfPokemons }: PokeListProps) => {
  const { typesValue, searchValue } = useFiltersContext();

  const activePokemons = useMemo(() => {
    return filteredPokemons(searchValue, typesValue, listOfPokemons);
  }, [listOfPokemons, searchValue, typesValue]);

  return (
    <>
      <TypeFilter />
      <SearchBar />
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

export default PokeList;
