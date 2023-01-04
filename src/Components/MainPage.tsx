import React, { useEffect, useState } from 'react';
import { isNil } from 'lodash';
import { PokeList } from './PokemonList/PokeList';
import { Container, MainButton, ErrorBlock } from './MainPageStyles';
import { useGetPokemonsQuery } from '../store/pokemons/pokemonsApi';
import { Loading } from './Common/Loading';
import { Pokemon } from '../model';

export const MainPage = () => {
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
          <PokeList listOfPokemons={currentPokemons} />
          <MainButton onClick={addMorePokemonsButtonHandler}>Load more</MainButton>
        </>
      )}
    </Container>
  );
};
