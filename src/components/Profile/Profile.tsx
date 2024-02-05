import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo";
import { ActionTypes, PostsDataProps, ProfilePageType } from "../../redux/state";

export type ProfileProps = {
  profilePage: ProfilePageType,
  dispatch: (action: ActionTypes) => void
}

const Profile = (props: ProfileProps) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postsData={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
