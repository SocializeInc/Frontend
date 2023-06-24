import MainBlock from "../../../components/UI/MainBlock";

import "./User.css";
import { useNavigate } from "react-router-dom";

const User = () => {
  const logo = require("../../../assets/user.png");
  const navigate = useNavigate();
  const handleOnProfileClick = () => navigate("/profile");

  return (
    <MainBlock>
      <div className="user" onClick={handleOnProfileClick}>
        <img className="photo" src={logo} alt="User logo" />
        <div className="username">adamdara</div>
      </div>
    </MainBlock>
  );
};

export default User;
