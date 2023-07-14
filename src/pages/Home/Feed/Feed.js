import PostCreator from "./PostCreator";
import SearchBar from "../../../components/UI/SearchBar";
import Post from "../../../components/UI/Post";

import styles from "./Feed.module.css";

const Feed = () => {
  return (
    <>
      <SearchBar />
      <PostCreator className={styles.content_block} />
      <Post />
    </>
  );
};

export default Feed;
