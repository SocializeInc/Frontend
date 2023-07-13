import MainBlock from "../../../components/UI/MainBlock";
import styles from "./User.module.css";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const User = () => {
  const logo = require("../../../assets/profile_icon.png");

  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const handleHoverUserMenu = () => {
    setUserMenuOpen(true);
  };
  const handleLeaveUserMenu = () => {
    setUserMenuOpen(false);
  };

  return (
    <MainBlock className={styles.block}>
      <p className={styles.welcome_message}>Welcome back</p>
      <div onMouseLeave={handleLeaveUserMenu}>
        <div className={`${styles.user} ${styles.user_row}`} onMouseOver={handleHoverUserMenu}>
          <img className={styles.photo} src={logo} alt="User logo" />
          <div className={styles.username}>adamdara</div>
        </div>
        {isUserMenuOpen && (
          <div className={`${styles.user} ${styles.user_open}`}>
            <NavLink className={`clean_navlink + ${styles.user_option}`} to="/profile">
              Profile
            </NavLink>
            <NavLink className={`clean_navlink + ${styles.user_option}`} to="/login">
              Sign Out
            </NavLink>
          </div>
        )}
      </div>
    </MainBlock>
  );
};

export default User;
