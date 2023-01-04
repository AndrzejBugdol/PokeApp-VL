import { createRouterReducer } from '@lagunovsky/redux-react-router';
import { combineReducers } from '@reduxjs/toolkit';
import { History } from 'history';

export const createRootReducer = (history: History) =>
  combineReducers({
    router: createRouterReducer(history),
  });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
