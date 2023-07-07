import BlockButton from '../../../components/UI/BlockButton'

import styles from './UserContent.module.css';

const UserContent = () => {
  return(
    <>
    <div className={styles.content_header}>
      <BlockButton className={styles.content_action} >Posts</BlockButton>
      <BlockButton className={styles.content_action}>Likes</BlockButton>
    </div>
    <div>

    </div>
    </>
  );
};

export default UserContent;