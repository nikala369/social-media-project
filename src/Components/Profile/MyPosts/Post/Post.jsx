import React from "react";
import style from "./Post.module.scss";

const Post = (props) => {
  return (
    <div className={style.post}>
      <img src="https://cdn.glowsly.com/wp-content/uploads/2017/08/best_runway_models_of_all_time_Natasha_Poly.jpg" alt="/" />
      {props.message}
      <div>
        <span>Like {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
