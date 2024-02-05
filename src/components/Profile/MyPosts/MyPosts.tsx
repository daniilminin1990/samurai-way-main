import React, { ChangeEvent, useRef, useState } from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { ActionTypes, PostsDataProps, addPostActionCreator, updateNewPostActionCreator } from "../../../redux/state";

type MyPostsProps = {
  postsData: PostsDataProps[],
  newPostText: string,
  dispatch: (action: ActionTypes) => void
}

const MyPosts = (props: MyPostsProps) => {

  let postsElement = props.postsData.map(p => {
    return <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  })

  let newPostElement = useRef<HTMLTextAreaElement>(null)

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = () => {
    let text = newPostElement.current!.value ?? ''
    props.dispatch(updateNewPostActionCreator(text))
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
