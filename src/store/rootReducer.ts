import { combineReducers } from '@reduxjs/toolkit';

import { pokeApi } from './pokemons/pokemonsApi';

export const createRootReducer = () =>
  combineReducers({
    [pokeApi.reducerPath]: pokeApi.reducer,
  });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
