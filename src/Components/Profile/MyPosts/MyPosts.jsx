import React from "react";
import style from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  // let postData = [
  //   { id: 1, message: 'Hi, how are you?', likeCount: "13" },
  //   { id: 2, message: 'It\'s my first post', likeCount: "18" }
  // ]

  
  let postElements = props.postData.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} />
  ));

  let newPostElement = React.createRef();
  
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <div className={style.myPosts}>
      <h2>My Posts</h2>
      <div className={style.postWriting}>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>

        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>

      <div className={style.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
