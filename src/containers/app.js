import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from './components/Card.js';
import { store } from '../store';
import { fetchMessages, fetchMembers } from '../actions/index';

const selectMessages = state => state.messages;
const selectMembers = state => state.members;

const App = () => {

  // only want the data on the first render
  useEffect(() => {

    // dispatching the action to redux
    store.dispatch(fetchMessages());
    store.dispatch(fetchMembers());
  }, []);

  const messages = useSelector(selectMessages);
  const members = useSelector(selectMembers);

  // would have been nice to put this in the reducer given more time along with the date formatting and sorting
  // so we could just render it
  const mergedData = messages.data.map(message => {
    let memberData = members.data.find(el => el.id === message.userId)
    return { ...message, ...memberData }
  })

  return (
    <main>
      <header><h1>Welcome to the NOW TV test!</h1></header>
      {!!mergedData?.length && mergedData.map((el) => <Card data={el} key={el.id + el.timestamp} />)}
    </main>
  );
};

export default App;
