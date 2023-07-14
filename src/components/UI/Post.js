import styles from "./Post.module.css";

const Post = () => {
  const profile_icon = require("../../assets/profile_icon.png");
  const like_icon = require("../../assets/like_icon.png");
  const comment_icon = require("../../assets/comment_icon.png");

  return (
    <div className={styles.post_block}>
      <div className={styles.header}>
        <img className={styles.icon} src={profile_icon} alt="Profle icon" />
        <div>adamdara</div>
      </div>
      <div className={styles.body}>
        EZ
        <br />
        EGY <br />
        POST
      </div>
      <div className={styles.footer}>
        <div className={styles.reaction_block}>
          <img
            className={styles.footer_icon}
            src={like_icon}
            alt="Like button"
          />
          <span className={styles.counter}>0</span>
        </div>
        <div className={styles.reaction_block}>
          <img
            className={styles.footer_icon}
            src={comment_icon}
            alt="Comment button"
          />
          <span className={styles.counter}>0</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
