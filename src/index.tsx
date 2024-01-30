import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, { StateType } from './redux/state'

let rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <App state={store.getState()}
      addPost={store.addPost}
      updateNewPostText={store.updateNewPostText}
    />,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)