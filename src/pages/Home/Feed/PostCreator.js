import React, { useState } from "react";

import BlockButton from "../../../components/UI/BlockButton";

import styles from "./PostCreator.module.css";

const PostCreator = (props) => {
  const [postContent, setPostContent] = useState("");

  const contentHandler = (event) => {
    setPostContent(event.target.value);
  };

  const classes = props.className;

  return (
    <div className={classes}>
      <div className={styles.post_header}>Make a post</div>
      <textarea
        name="postContent"
        rows="5"
        cols="50"
        placeholder="What's on your mind?"
        value={postContent}
        onChange={contentHandler}
      ></textarea>
      <div className={styles.post_functions}>
        <div className={styles.text_extra}>/TODO: csatolások/</div>
        <BlockButton id="postButton" className={styles.postButton}>Post</BlockButton>
      </div>
    </div>
  );
};

export default PostCreator;
