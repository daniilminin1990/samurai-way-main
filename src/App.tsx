import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile, { ProfileProps } from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { DialogsDataProps, MessagesDataProps, PostsDataProps } from './index';

type AppProps = {
  dialogsData: Array<DialogsDataProps>
  messagesData: Array<MessagesDataProps>
  postsData: PostsDataProps[]
}

// let ProfileComponent = (props: AppProps) => <Profile postsData={props.postsData} />

function App(props: AppProps) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
          {/* <Route path='/dialogs' component={Dialogs} /> */}
          <Route path='/profile' render={() => <Profile postsData={props.postsData} />} />
          {/* <Route path='/profile' component={Profile} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
