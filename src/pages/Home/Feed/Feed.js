import PostCreator from "./PostCreator";
import MainBlock from "../../../components/UI/MainBlock";
import SearchBar from "../../../components/UI/SearchBar";

import styles from "./Feed.module.css";

const Feed = () => {
  return (
    <MainBlock>
      <SearchBar />
      <PostCreator className={styles.content_block} />
    </MainBlock>
  );
};

export default Feed;
