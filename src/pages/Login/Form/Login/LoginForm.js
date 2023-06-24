import React, { useState } from "react";

import Card from "../../../../components/UI/Card";

import "./LoginForm.css";

const LoginForm = (props) => {
  const [isLoginSubmitted, setLoginIsSubmitted] = useState(false);

  const [loginUserData, setLoginUserData] = useState({
    username: "",
    password: "",
  });

  const usernameChangeHandler = (event) => {
    setLoginUserData((prevState) => {
      return { ...prevState, username: event.target.value };
    });
  };

  const passwordChangeHandler = (event) => {
    setLoginUserData((prevState) => {
      return { ...prevState, password: event.target.value };
    });
  };

  const registerHandler = (event) => {
    event.preventDefault();
    props.onChangeRegister(true);
  };

  //TODO: Give JSON forward
  const submitHandler = (event) => {
    event.preventDefault();

    const userFromDatabase = props.users.find(
      (user) => user.username === loginUserData.password
    );

    if (userFromDatabase) {
      if (userFromDatabase.password !== loginUserData.password) {
        console.log("invalid password");
      } else {
        setLoginIsSubmitted(true);
      }
    } else {
      console.log("username not found");
    }

    const userData = {
      username: loginUserData.username,
      password: loginUserData.password,
    };

    //TODO: send userData JSON to backend
    setLoginUserData({
      username: "",
      password: "",
    });
  };

  return (
    <Card>
      <div className="title">Login</div>
      <form onSubmit={submitHandler}>
        <div className="input-container">
          <label>Username</label>
          <input
            type="text"
            name="lastName"
            value={loginUserData.username}
            onChange={usernameChangeHandler}
            required
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            name="registerPass"
            value={loginUserData.password}
            onChange={passwordChangeHandler}
            minLength={6}
            required
          />
        </div>
        <div className="button-container">
          <input type="submit" value="Log In" />
        </div>
      </form>
      <div className="button-container">
        <input type="submit" value="Register" onClick={registerHandler} />
      </div>
    </Card>
  );
};

export default LoginForm;
