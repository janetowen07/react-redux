import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  messages: message,
  members: member,
});

const initialState = {
  data: [],
  error: "",
};

export const message = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MESSAGES": return { ...state, data: action.payload }
    case "ERROR": return { ...state, error: action.msg }
    default: return state
  }
};

export const member = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MEMBERS": return { ...state, data: action.payload }
    case "ERROR": return { ...state, error: action.msg }
    default: return state
  }
};
