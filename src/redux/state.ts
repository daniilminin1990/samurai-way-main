
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
}

export type DialogsPageType = {
  messages: MessagesDataProps[]
  dialogs: DialogsDataProps[],
}

export type StateType = {
  profilePage: ProfilePageType,
  dialogsPage: DialogsPageType,
}


let state: StateType = {
  profilePage: {
    posts: [
      { id: '1', message: 'Hi. how are you?', likesCount: 12 },
      { id: '2', message: 'It\'s my first post', likesCount: 1 },
      { id: '2', message: 'It\'s my BDay', likesCount: 20 },
      { id: '2', message: 'It\'s me', likesCount: 114 },
    ],    
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
}

export default state