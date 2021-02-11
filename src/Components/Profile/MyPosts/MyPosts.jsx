import React from "react";
import style from "./MyPosts.module.scss";
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div className={style.myPosts}>
      <h2>My Posts</h2>
      <div className={style.postWriting}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        <Post message='Hi, how are you?' likeCount="0" />
        <Post message="It's my first post" likeCount="23" />
      </div>
    </div>
  );
};

export default MyPosts;
