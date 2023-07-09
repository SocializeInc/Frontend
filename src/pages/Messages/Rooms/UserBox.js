import ChatBox from "../Chat/ChatBox";

import BlockButton from "../../../components/UI/BlockButton";

const UserBox = ({ chatPartner }) => {

  return (
    <div>
      <h1>Messages</h1>
      <div>
        <BlockButton onClick={() => chatPartner(ChatBox)}>
          Random User
        </BlockButton>
      </div>
    </div>
  );
};

export default UserBox;
