import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile, { ProfileProps } from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { ActionTypes, StateType } from './redux/state';


type AppProps = {
  state: StateType,
  // addPost: () => void
  // updateNewPostText: (text: string) => void
  dispatch: (action: ActionTypes) => void
}

function App(props: AppProps) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
            render={() => <Dialogs
              state={props.state.dialogsPage} />} />
          <Route path='/profile'
            render={() => <Profile
              profilePage={props.state.profilePage}
              // addPost={props.addPost}
              // updateNewPostText={props.updateNewPostText}
              dispatch={props.dispatch}
            />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
