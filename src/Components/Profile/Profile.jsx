import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={style.mainContent}>
      <ProfileInfo />
      <MyPosts
        postData={props.profilePage.postData}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
