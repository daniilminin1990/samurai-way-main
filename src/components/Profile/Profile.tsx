import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo";
import { PostsDataProps, ProfilePageType } from "../../redux/state";

export type ProfileProps = {
  profilePage: ProfilePageType,
  addPost: () => void
  updateNewPostText: (text: string) => void
}

const Profile = (props: ProfileProps) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postsData={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
