import React, { ChangeEvent, useRef, useState } from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { PostsDataProps } from "../../../redux/state";

type MyPostsProps = {
  postsData: PostsDataProps[],
  addPost: (text: string) => void
}

const MyPosts = (props: MyPostsProps) => {

  const [newPost, setNewPost] = useState<string>('')

  let postsElement = props.postsData.map(p => {
    return <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  })

  let newPostElement = useRef<HTMLTextAreaElement>(null)

  let addPost = () => {
    props.addPost(newPost)
    setNewPost('')
  }
  // let addPost = () => {
  //   let text = newPostElement.current!.value ?? ''
  //   props.addPost(text)
  //   newPostElement.current!.value = ''
  // }

  let onNewTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost(e.currentTarget.value)
  }
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            // ref={newPostElement} 
            value={newPost} onChange={onNewTitleChange}></textarea>
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
