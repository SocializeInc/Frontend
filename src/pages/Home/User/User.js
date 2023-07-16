import MainBlock from "../../../components/UI/MainBlock";
import styles from "./User.module.css";

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import Cookies from "universal-cookie";

const User = () => {
  const cookies = new Cookies();
  const logo = require("../../../assets/profile_icon.png");
  const [username, setUsername] = useState(false);

  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const handleHoverUserMenu = () => {
    setUserMenuOpen(true);
  };
  const handleLeaveUserMenu = () => {
    setUserMenuOpen(false);
  };

  const getUsername = () => {
    (async () => {
      fetch("http://localhost:8080/socialize/api/account/getUsername", {
        method: "get",
        headers: {
          Authorization: `Bearer ${cookies.get("accessToken")}`,
        },
      })
        .then((response) => response.text())
        .then((text) => setUsername(text))
        .catch((err) => console.log(err));
    })();
  };

  const removeCookieOnLogin = () => {
    cookies.remove("accessToken", {
      path: "/",
      sameSite: "strict",
      secure: true,
    });
  };

  useEffect(getUsername);

  return (
    <MainBlock className={styles.block}>
      <p className={styles.welcome_message}>Welcome back</p>
      <div onMouseLeave={handleLeaveUserMenu}>
        <div
          className={`${styles.user} ${styles.user_row}`}
          onMouseOver={handleHoverUserMenu}
        >
          <img className={styles.photo} src={logo} alt="User logo" />
          <div className={styles.username}>{username}</div>
        </div>
        {isUserMenuOpen && (
          <div className={`${styles.user} ${styles.user_open}`}>
            <NavLink
              className={`clean_navlink + ${styles.user_option}`}
              to="/profile"
            >
              Profile
            </NavLink>
            <NavLink
              className={`clean_navlink + ${styles.user_option}`}
              to="/login"
              onClick={removeCookieOnLogin}
            >
              Sign Out
            </NavLink>
          </div>
        )}
      </div>
    </MainBlock>
  );
};

export default User;
