import PostCreator from "./PostCreator";
import MainBlock from "../../UI/MainBlock";

import "./Feed.css";

const Feed = () => {
  return (
    <MainBlock className='feed-block' >
      <PostCreator />
    </MainBlock>
  );
};

export default Feed;
