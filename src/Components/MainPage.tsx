import React, { useState, useEffect } from 'react';
import { Pokemon } from '../model';
import { fetchPokemonsData } from './PokemonList/FetchPokemons';
import { PokeList } from './PokemonList/PokeList';
import { Container, MainButton, ErrorBlock } from './MainPageStyles';

export const MainPage: React.FC = () => {
  const [indexOfFirstPokemon, setIndexOfFirstPokemon] = useState<number>(1);
  const [currentPokemons, setcurrentPokemons] = useState<Pokemon[]>([]);
  const [displayError, setdisplayError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchPokemonsData(indexOfFirstPokemon);
      if (response.length !== 0) {
        setcurrentPokemons((prev) => [...prev, ...response]);
        setdisplayError(false);
      } else {
        setdisplayError(true);
      }
    };
    fetchData();
  }, [indexOfFirstPokemon]);

  const addMorePokemonsButtonHandler = () => {
    setIndexOfFirstPokemon((prev) => prev + 20);
  };

  return (
    <Container>
      {displayError ? (
        <ErrorBlock>Failed to load the data.</ErrorBlock>
      ) : (
        <>
          <PokeList
            listOfPokemons={currentPokemons}
            errorFlag={displayError}
          />
          <MainButton onClick={addMorePokemonsButtonHandler}>Load more</MainButton>
        </>
      )}
    </Container>
  );
};
