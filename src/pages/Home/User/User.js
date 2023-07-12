import MainBlock from "../../../components/UI/MainBlock";

import "./User.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const User = () => {
  const logo = require("../../../assets/user.png");

  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const handleHoverUserMenu = () => {
    setUserMenuOpen(true);
  };
  const handleLeaveUserMenu = () => {
    setUserMenuOpen(false);
  };

  return (
    <MainBlock>
      <p className="welcome_message">Welcome back</p>
      <div onMouseLeave={handleLeaveUserMenu}>
        <div className="user user-row" onMouseOver={handleHoverUserMenu}>
          <img className="photo" src={logo} alt="User logo" />
          <div className="username">adamdara</div>
        </div>
        {isUserMenuOpen && (
          <div className="user user-open">
            <NavLink className="user_option clean_navlink" to="/profile">
              Profile
            </NavLink>
            <NavLink className="user_option clean_navlink" to="/login">
              Sign Out
            </NavLink>
          </div>
        )}
      </div>
    </MainBlock>
  );
};

export default User;
