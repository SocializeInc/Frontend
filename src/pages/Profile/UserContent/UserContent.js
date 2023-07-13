import { useState } from "react";
import BlockButton from "../../../components/UI/BlockButton";

import styles from "./UserContent.module.css";

const UserContent = () => {
  const [activeAt, setActiveAt] = useState(null);

  const handlePostsClick = () => {
    setActiveAt("Posts");
  };

  const handleLikesClick = () => {
    setActiveAt("Likes");
  };
  return (
    <>
      <div className={styles.content_header}>
        <BlockButton
          className={`${styles.content_action} ${styles.posts} ${activeAt === "Posts" ? styles.active : null}`}
          onClick={handlePostsClick}
        >
          Posts
        </BlockButton>
        <BlockButton
          className={`${styles.content_action} ${styles.likes} ${activeAt === "Likes" ? styles.active : null}`}
          onClick={handleLikesClick}
        >
          Likes
        </BlockButton>
      </div>
      <div></div>
    </>
  );
};

export default UserContent;
