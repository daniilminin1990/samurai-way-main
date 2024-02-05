import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, { StateType } from './redux/state'

let rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <App
      // я не знаю зачем он здесь поменял вот так. Откуда этот state берется???
      // Аа, он берется из вызова rerenderEntireTree внизу страницы
      state={state}
      //state={store.getState()}

      dispatch={store.dispatch.bind(store)}
      store={store}
    />,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)