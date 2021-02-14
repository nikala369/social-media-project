import React from "react";
import style from "./Post.module.scss";

const Post = (props) => {
  return (
    <div className={style.post}>
      <img src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg" alt="/" />
      {props.message}
      <div>
        <span>Like {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
