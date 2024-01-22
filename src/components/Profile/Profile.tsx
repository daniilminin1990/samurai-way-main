import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo";
import { PostsDataProps } from "../..";

export type ProfileProps = {
  postsData: PostsDataProps[]
}

const Profile = (props: ProfileProps) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.postsData} />
    </div>
  );
};

export default Profile;
