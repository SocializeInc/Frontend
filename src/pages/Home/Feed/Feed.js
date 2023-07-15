import PostCreator from "./PostCreator";
import SearchBar from "../../../components/UI/SearchBar";
import Post from "../../../components/UI/Post";

import styles from "./Feed.module.css";

const Feed = () => {
  return (
    <>
      <SearchBar />
      <div className={styles.posts_block}>
        <PostCreator className={styles.content_block} />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};

export default Feed;
