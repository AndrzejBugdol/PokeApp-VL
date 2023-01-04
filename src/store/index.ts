import { createRouterMiddleware } from '@lagunovsky/redux-react-router';
import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { History } from 'history';
import { pokeApi } from './pokemons/pokemonsApi';
import { createRootReducer, RootState } from './rootReducer';

export const getStore = (history: History, preloadedState: PreloadedState<RootState> = {}) => {
  const store = configureStore({
    preloadedState,
    reducer: createRootReducer(history),
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware().concat(pokeApi.middleware),
      createRouterMiddleware(history),
    ],
  });
  return store;
};
