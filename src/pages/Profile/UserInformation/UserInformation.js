import styles from "./UserInformation.module.css";

import InformationBlock from "../../../components/UI/InformationBlock";

const UserInformation = () => {
  const logo = require("../../../assets/user.png");

  return (
    <>
      <div className={styles.photo_container}>
        <img className={styles.profilePhoto} src={logo} alt="Profile" />
        <button type="button" className={styles.middle_button}>
          <span className={styles.button_text}>Change Picture</span>
        </button>
      </div>
      <p>Adam Dara</p>
      <div className={`${styles.information_block}`}>
        <p className={styles.information_user}>Information</p>
        <div className={styles.row}>
          <div className={styles.column}>
            <InformationBlock />
          </div>
          <div className={styles.column}>
            <InformationBlock />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInformation;
