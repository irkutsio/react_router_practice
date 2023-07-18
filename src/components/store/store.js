import { reducer } from './counter/reducer';
const { createStore, combineReducers } = require('redux');

export const store = createStore(reducer);


