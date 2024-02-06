import { SendMessageCreatorType, UpdateNewMessageBodyCreatorType, dialogsReducer } from "./dialogsReducer";
import { AddPostActionType, UpdateNewPostTextActionType, profileReducer } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";

export type DialogsDataProps = {
  id: string,
  name: string
}

export type MessagesDataProps = {
  id: string,
  message: string
}

export type PostsDataProps = MessagesDataProps & {
  likesCount: number
}

export type ProfilePageType = {
  posts: PostsDataProps[],
  newPostText: string
}

export type DialogsPageType = {
  messages: MessagesDataProps[]
  dialogs: DialogsDataProps[],
  newMessageBody: string
}

export type StateType = {
  profilePage: ProfilePageType,
  dialogsPage: DialogsPageType,
}

export type StoreType = {
  _state: StateType,
  _callSubscriber: CallSubscriberType,
  getState: () => StateType;
  subscribe: (observer:(state: StateType) => void) => void
  dispatch: (action: ActionTypes) => void
}

type CallSubscriberType = (state: StateType) => void;

export type ActionTypes = AddPostActionType 
| UpdateNewPostTextActionType 
| SendMessageCreatorType 
| UpdateNewMessageBodyCreatorType

let store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: '1', message: 'Hi. how are you?', likesCount: 12 },
        { id: '2', message: 'It\'s my first post', likesCount: 1 },
        { id: '3', message: 'It\'s my BDay', likesCount: 20 },
        { id: '4', message: 'It\'s me', likesCount: 114 },
      ],
      newPostText: 'ылорвалоыврп'
    },
    dialogsPage: {
      messages: [
        { id: '1', message: 'Hi. How are you', },
        { id: '2', message: 'Yo mazafaka', },
        { id: '3', message: 'It is a great day innit?', },
        { id: '4', message: 'Hey', },
        { id: '5', message: 'Aloha', },
        { id: '6', message: 'Konichua', },
      ],
      dialogs: [
        { id: '1', name: 'Ilya', },
        { id: '2', name: 'Oleg', },
        { id: '3', name: 'Tanya', },
        { id: '4', name: 'Victor', },
        { id: '5', name: 'Elena', },
        { id: '6', name: 'Valery', },
      ],
      newMessageBody: '',
    },
    // sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },
  subscribe (observer) {
    this._callSubscriber = observer
  },

  dispatch (action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    // this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state)

    // if(action.type === ADD_POST){
    //   let newPost: PostsDataProps = {
    //     id: '5',
    //     message: this._state.profilePage.newPostText,
    //     likesCount: 0,
    //   };
    //   this._state.profilePage.posts.push(newPost)
    //   this._state.profilePage.newPostText = ''
    //   this._callSubscriber(this._state)
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //   this._state.profilePage.newPostText = action.newText
    //   this._callSubscriber(this._state)
    // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //   this._state.dialogsPage.newMessageBody = action.body;
    //   this._callSubscriber(this._state)
    // } else if (action.type === SEND_MESSAGE) {
    //   let body = this._state.dialogsPage.newMessageBody;
    //   this._state.dialogsPage.newMessageBody = '';
    //   this._state.dialogsPage.messages.push({id: '7', message: body});
    //   this._callSubscriber(this._state)
    // }
  }
}

export default store