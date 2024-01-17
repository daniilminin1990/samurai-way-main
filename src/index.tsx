import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type DialogsDataProps = {
  id: string,
  name: string
}

export type MessagesDataProps = {
  id: string,
  message: string
}

let dialogsData: Array<DialogsDataProps> = [
  { id: '1', name: 'Ilya', },
  { id: '2', name: 'Oleg', },
  { id: '3', name: 'Tanya', },
  { id: '4', name: 'Victor', },
  { id: '5', name: 'Elena', },
  { id: '6', name: 'Valery', },
]

let messagesData: Array<MessagesDataProps> = [
  { id: '1', message: 'Hi. How are you', },
  { id: '2', message: 'Yo mazafaka', },
  { id: '3', message: 'It is a great day innit?', },
  { id: '4', message: 'Hey', },
  { id: '5', message: 'Aloha', },
  { id: '6', message: 'Konichua', },
]

ReactDOM.render(
  <App dialogsData={dialogsData} messagesData={messagesData} />,
  document.getElementById('root')
);