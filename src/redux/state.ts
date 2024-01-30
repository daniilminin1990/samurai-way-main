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
}

export type StateType = {
  profilePage: ProfilePageType,
  dialogsPage: DialogsPageType,
}

export type StoreType = {
  _state: StateType,
  getState: () => StateType;
  _callSubscriber: CallSubscriberType,
  addPost: () => void,
  updateNewPostText: (text: string) => void,
  subscribe: Function
}

type CallSubscriberType = (state: StateType) => void;

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
      ]
    }
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log('State changed')
  },
  addPost () {
    let newPost: PostsDataProps = {
      id: '5',
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state)
  },
  updateNewPostText (newText: string) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },
  subscribe (observer: (state: StateType) => void) {
    this._callSubscriber = observer
  },
}

// let rerenderEntireTree = (state: StateType) => {
//   console.log('State changed')
// }

// let state: StateType = {
//   profilePage: {
//     posts: [
//       { id: '1', message: 'Hi. how are you?', likesCount: 12 },
//       { id: '2', message: 'It\'s my first post', likesCount: 1 },
//       { id: '3', message: 'It\'s my BDay', likesCount: 20 },
//       { id: '4', message: 'It\'s me', likesCount: 114 },
//     ],
//     newPostText: 'ылорвалоыврп'
//   },
//   dialogsPage: {
//     messages: [
//       { id: '1', message: 'Hi. How are you', },
//       { id: '2', message: 'Yo mazafaka', },
//       { id: '3', message: 'It is a great day innit?', },
//       { id: '4', message: 'Hey', },
//       { id: '5', message: 'Aloha', },
//       { id: '6', message: 'Konichua', },
//     ],
//     dialogs: [
//       { id: '1', name: 'Ilya', },
//       { id: '2', name: 'Oleg', },
//       { id: '3', name: 'Tanya', },
//       { id: '4', name: 'Victor', },
//       { id: '5', name: 'Elena', },
//       { id: '6', name: 'Valery', },
//     ]
//   }
// }

// export const  addPost = () => {
//   let newPost: PostsDataProps = {
//     id: '5',
//     message: state.profilePage.newPostText,
//     likesCount: 0,
//   };
//   state.profilePage.posts.push(newPost)
//   state.profilePage.newPostText = ''
//   rerenderEntireTree(state)
// };

// export const updateNewPostText = (newText: string) => {
//   state.profilePage.newPostText = newText
//   rerenderEntireTree(state)
// };

// export const subscribe = (observer: (state: StateType) => void) => {
//   rerenderEntireTree = observer
// }

export default store

// declare global {
//   interface Window {
//     store: StoreType;
//   }
// }
// // window.store - чтобы можно было к нему глобально обратиться, для просмотра в консоли
// window.store = store;
//store OOP