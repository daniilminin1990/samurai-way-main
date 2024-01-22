import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { MessagesDataProps, PostsDataProps } from "../../../index";

type MyPostsProps = {
  postsData: PostsDataProps[],
}

const MyPosts = (props: MyPostsProps) => {

  // let postsData: Array<PostsDataProps> = [
  //   { id: '1', message: 'Hi. how are you?', likesCount: 12 },
  //   { id: '2', message: 'It\'s my first post', likesCount: 1 },
  //   { id: '2', message: 'It\'s my BDay', likesCount: 20 },
  //   { id: '2', message: 'It\'s me', likesCount: 114 },
  // ]

  let postsElement = props.postsData.map(p => {
    return <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  })

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>

        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}
        {/* <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount} /> */}
      </div>
    </div>
  );
};

export default MyPosts;
