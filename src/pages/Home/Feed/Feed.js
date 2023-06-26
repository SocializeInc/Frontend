import PostCreator from "./PostCreator";
import SearchBar from "../../../components/UI/SearchBar";

import styles from "./Feed.module.css";

const Feed = () => {
  return (
    <>
      <SearchBar />
      <PostCreator className={styles.content_block} />
    </>
  );
};

export default Feed;
