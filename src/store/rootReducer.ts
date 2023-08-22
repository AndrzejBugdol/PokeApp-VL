import { createRouterReducer } from '@lagunovsky/redux-react-router';
import { combineReducers } from '@reduxjs/toolkit';
import { History } from 'history';

import { pokeApi } from './pokemons/pokemonsApi';

export const createRootReducer = (history: History) =>
  combineReducers({
    router: createRouterReducer(history),
    [pokeApi.reducerPath]: pokeApi.reducer,
  });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
