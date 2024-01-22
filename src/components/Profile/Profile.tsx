import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo";
import { PostsDataProps, ProfilePageType } from "../../redux/state";

export type ProfileProps = {
  state: ProfilePageType,
  addPost: (text: string) => void
}

const Profile = (props: ProfileProps) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.state.posts} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
