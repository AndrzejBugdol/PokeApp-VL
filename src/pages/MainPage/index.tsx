import { isNil } from 'lodash';
import React, { useEffect, useState } from 'react';

import Loading from '../../components/common/Loader';
import PokeList from '../../components/PokemonList';
import { FiltersProvider } from '../../services/FiltersContext';
import { useGetPokemonsQuery } from '../../store/pokemons/pokemonsApi';
import { Pokemon } from '../../types';
import { Container, LoadMoreButton, ErrorBlock } from './styles';

const MainPage = () => {
  const [indexOfFirstPokemon, setIndexOfFirstPokemon] = useState<number>(1);
  const [currentPokemons, setcurrentPokemons] = useState<Pokemon[]>([]);
  const { data, error, isLoading, isFetching } = useGetPokemonsQuery(indexOfFirstPokemon);

  useEffect(() => {
    if (!isNil(data)) {
      setcurrentPokemons((prev) => [...prev, ...data]);
    }
  }, [data]);

  const addMorePokemonsButtonHandler = () => {
    setIndexOfFirstPokemon((prev) => prev + 20);
  };

  return (
    <Container>
      {error && <ErrorBlock>Failed to load the data.</ErrorBlock>}
      {!isNil(data) && (
        <>
          {(isLoading || isFetching) && <Loading />}
          <FiltersProvider>
            <PokeList listOfPokemons={currentPokemons} />
          </FiltersProvider>
          <LoadMoreButton onClick={addMorePokemonsButtonHandler}>Load more</LoadMoreButton>
        </>
      )}
    </Container>
  );
};

export default MainPage;
