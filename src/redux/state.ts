const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

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

// type AddPostActionType = {
//   type: 'ADD-POST',
// }
type AddPostActionType = ReturnType<typeof addPostActionCreator> 
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostActionCreator>
type SendMessageCreatorType = ReturnType<typeof sendMessageCreator>
type UpdateNewMessageBodyCreatorType = ReturnType<typeof updateNewMessageBodyCreator>

export type ActionTypes = AddPostActionType 
      | UpdateNewPostTextActionType 
      | SendMessageCreatorType 
      | UpdateNewMessageBodyCreatorType

// export const addPostActionCreator = (): AddPostActionType => {
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  } as const
}
export const updateNewPostActionCreator = (text: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  } as const
}
export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  } as const
}
export const updateNewMessageBodyCreator = (body: string) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  } as const
}

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
    }
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
    if(action.type === ADD_POST){
      let newPost: PostsDataProps = {
        id: '5',
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state)
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({id: '7', message: body});
      this._callSubscriber(this._state)
    }

  }
}

export default store