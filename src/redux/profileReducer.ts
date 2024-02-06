import { ActionTypes, PostsDataProps, ProfilePageType } from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state: ProfilePageType, action: ActionTypes): ProfilePageType => {
  switch(action.type) {
    case ADD_POST: {
      let newPost: PostsDataProps = {
            id: '5',
            // Заменяем все this._state.profilePage на state(в state.ts укажем кто это)
            // message: this._state.profilePage.newPostText,
            message: state.newPostText,
            likesCount: 0,
          };
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    }
    case UPDATE_NEW_POST_TEXT: {
      state.newPostText = action.newText
      return state
    }
    default: {
      return state
    }
  }
}

export type AddPostActionType = ReturnType<typeof addPostActionCreator> 
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostActionCreator>

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
