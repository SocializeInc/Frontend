import React, { useEffect, useState } from "react";

import Card from "../../../../components/UI/Card";

import "./LoginForm.css";

import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const navigate = useNavigate();

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

  //Give JSON forward
  const submitHandler = (event) => {
    event.preventDefault();

    (async () => {
      await fetch("http://localhost:8080/socialize/api/auth/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({
          username: loginUserData.username,
          password: loginUserData.password,
        }),
      })
      .then(response => response.json())
      .then(response => {
      
          (response.accessToken) ? setLoginIsSubmitted(true) : setLoginIsSubmitted(false);
      
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    })();

    setLoginUserData({
      username: "",
      password: "",
    });
  };

  useEffect(() => {
    if (isLoginSubmitted) {
      navigate("/home");
    }
  }, [isLoginSubmitted, navigate]);
  
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
