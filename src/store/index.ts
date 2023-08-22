import { configureStore } from '@reduxjs/toolkit';

import { pokeApi } from './pokemons/pokemonsApi';
import { createRootReducer } from './rootReducer';

export const getStore = () => {
  const store = configureStore({
    reducer: createRootReducer(),
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware().concat(pokeApi.middleware)],
  });
  return store;
};
