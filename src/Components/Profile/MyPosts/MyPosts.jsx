import React from "react";
import style from "./MyPosts.module.scss";
import Post from './Post/Post';


const MyPosts = (props) => {
  let postData = [
    { id: 1, message: 'Hi, how are you?', likeCount: "13" },
    { id: 2, message: 'It\'s my first post', likeCount: "18" }
  ];
  
  
  let postElements =
   postData.map(p => 
   {<Post message={p.message} likeCount={p.likeCount} />});

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
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
