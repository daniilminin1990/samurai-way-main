import React, { ChangeEvent, useRef, useState } from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { ActionTypes, PostsDataProps } from "../../../redux/state";

type MyPostsProps = {
  postsData: PostsDataProps[],
  newPostText: string,
  // addPost: () => void
  // updateNewPostText: (text: string) => void
  dispatch: (action: ActionTypes) => void
}

const MyPosts = (props: MyPostsProps) => {

  const [newPost, setNewPost] = useState<string>('')

  let postsElement = props.postsData.map(p => {
    return <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  })

  let newPostElement = useRef<HTMLTextAreaElement>(null)

  let addPost = () => {
    // props.addPost()
    props.dispatch({ type: 'ADD-POST' })
  }
  // let addPost = () => {
  //   props.addPost(newPost)
  //   setNewPost('')
  // }

  // let onNewTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   setNewPost(e.currentTarget.value)
  // }

  let onPostChange = () => {
    let text = newPostElement.current!.value ?? ''
    // props.updateNewPostText(text)
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
  }
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          // value={newPost}
          // onChange={onNewTitleChange}
          />
        </div>

        <div>
          <button onClick={addPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;
