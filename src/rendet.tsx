import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { StateType, addPost } from './redux/state'

export let rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} />,
    // <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />,
    document.getElementById('root')
  );
}