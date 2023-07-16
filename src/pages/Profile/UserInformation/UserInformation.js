import styles from "./UserInformation.module.css";

import InformationBlock from "../../../components/UI/InformationBlock";

const UserInformation = () => {
  const logo = require("../../../assets/profile_icon.png");

  return (
    <>
      <div className={styles.photo_container}>
        <img className={styles.profilePhoto} src={logo} alt="Profile" />
        <button type="button" className={styles.middle_button}>
          <span className={styles.button_text}>Change Picture</span>
        </button>
      </div>
      <p className={styles.name}>Adam Dara</p>
      <div className={`${styles.information_block}`}>
        <p className={styles.information_user}>Information</p>
        <div className={styles.row}>
          <div className={styles.column}>
            <InformationBlock header="First Name"/>
            <InformationBlock header="Last Name"/>
            <InformationBlock header="Username"/>
          </div>
          <div className={styles.column}>
            <InformationBlock header="E-Mail"/>
            <InformationBlock header="Country"/>
            <InformationBlock header="Birth Date"/>
          </div>
        </div>
        <InformationBlock header="Desciption"/>
      </div>
    </>
  );
};

export default UserInformation;
