import React from "react";
import style from "./MyPosts.scss";
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div className="my-posts">
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post message='Hi, how are you?' likeCount="0"/>
        <Post message="It's my first post" likeCount="23" />
      </div>
    </div>
  );
};

export default MyPosts;
