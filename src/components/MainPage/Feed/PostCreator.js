import React, { useState } from "react";

import "./PostCreator.css";

const PostCreator = () => {
  const [postContent, setPostContent] = useState("");

  const contentHandler = (event) => {
    setPostContent(event.target.value);
  };

  return (
    <div className="post-block">
      <div className="post-header">Make a post</div>
      <textarea
        name="postContent"
        rows="5"
        cols="50"
        placeholder="What's on your mind?"
        value={postContent}
        onChange={contentHandler}
      ></textarea>
      <div className="post-functions">
        <div className="text-extra">/TODO: csatolások/</div>
        <div id="postButton">Post</div>
      </div>
    </div>
  );
};

export default PostCreator;
