import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <img src="" alt="/" />
      {props.message}
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
