import ChatBox from "../Chat/ChatBox";

import BlockButton from "../../../components/UI/BlockButton";

import styles from './UserBox.module.css';

const UserBox = ({ chatPartner }) => {

  return (
    <div>
      <h1>Messages</h1>
      <div className={styles.user_block}>
        <BlockButton className={styles.user} onClick={() => chatPartner(ChatBox)}>
          Random User
        </BlockButton>
      </div>
    </div>
  );
};

export default UserBox;
