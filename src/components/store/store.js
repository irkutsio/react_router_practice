import { reducer } from './counter/reducer';
const { createStore } = require('redux');

export const store = createStore(reducer);
