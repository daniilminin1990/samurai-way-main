import React, { useRef } from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { PostsDataProps } from "../../../redux/state";

type MyPostsProps = {
  postsData: PostsDataProps[],
}

const MyPosts = (props: MyPostsProps) => {

  let postsElement = props.postsData.map(p => {
    return <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  })

  let newPostElement = useRef<HTMLTextAreaElement>(null)

  let addPost = () => {
    debugger
    let text = newPostElement.current?.value
    alert(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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
