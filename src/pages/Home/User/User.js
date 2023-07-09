import MainBlock from "../../../components/UI/MainBlock";

import "./User.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const User = () => {
  const logo = require("../../../assets/user.png");
  const navigate = useNavigate();
  const handleOnProfileClick = () => navigate("/profile");
  const handleOnSignOutClick = () => navigate("/login");

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
            <a className="user_option" onClick={handleOnProfileClick}>
              Profile
            </a>
            <a className="user_option" onClick={handleOnSignOutClick}>
              Sign Out
            </a>
          </div>
        )}
      </div>
    </MainBlock>
  );
};

export default User;
