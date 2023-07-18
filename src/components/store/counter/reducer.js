import { authReducer } from '../auth/authSlice';
import { initialState } from '../initialState';
import { DECREMENT, INCREMENT, SETSTEP } from './types';
const { combineReducers } = require('redux');

const counterReducer = (state = initialState.counter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        total: state.total + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        total: state.total - action.payload,
      };
    case SETSTEP:
      return { ...state, step: action.payload };
    default:
      return state;
  }
};

const todoReducer = (state = initialState.todo, action) => {
  switch (action.type) {
    case 'createTodo':
      return {
        ...state,
        todo: [...state.todo, { ...action.todo }],
      };
    default:
      return state;
  }
};

export const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  auth: authReducer,
});
