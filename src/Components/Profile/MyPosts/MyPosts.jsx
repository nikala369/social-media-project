import React from "react";
import style from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postElements = props.postData.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} />
  ));

  // catching textarea value with ref
  let newPostElement = React.createRef();

  let addPost = () => {
    debugger;
    props.dispatch({ type: "ADD-POST" });
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text});
  }

  return (
    <div className={style.myPosts}>
      <h2>My Posts</h2>
      <div className={style.postWriting}>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement}
            value={props.newPostText} />
        </div>

        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>

      <div className={style.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
