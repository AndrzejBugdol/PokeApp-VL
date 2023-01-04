import { createRouterMiddleware } from '@lagunovsky/redux-react-router';
import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { History } from 'history';
import { createRootReducer, RootState } from './rootReducer';

export const getStore = (history: History, preloadedState: PreloadedState<RootState> = {}) => {
  const store = configureStore({
    preloadedState,
    reducer: createRootReducer(history),
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), createRouterMiddleware(history)],
  });
  return store;
};
