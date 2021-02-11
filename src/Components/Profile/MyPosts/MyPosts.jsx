import React from "react";
import "./MyPosts.css";
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div className="my-posts">
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message='Hi, how are you?'/>
        <Post message="It's my first post"/>
      </div>
    </div>
  );
};

export default MyPosts;
