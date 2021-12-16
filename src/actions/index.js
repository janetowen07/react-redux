import { getMessages, getMembers } from '../data';

// action creator
export const fetchMessages = () => {
  return (dispatch) => {
    return getMessages()
      .then((response) => dispatch({ type: 'FETCH_MESSAGES', payload: response }))
      .catch((err) => dispatch({ type: 'ERROR', msg: err }));
  };
};

export const fetchMembers = () => {
  return (dispatch) => {
    return getMembers()
      .then((response) => dispatch({ type: 'FETCH_MEMBERS', payload: response }))
      .catch((err) => dispatch({ type: 'ERROR', msg: err }));
  };
};
