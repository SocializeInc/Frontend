import React, { useEffect, useState } from "react";

import Card from "../../../../components/UI/Card";

import styles from "../Form.module.css";

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
        .then((response) => response.json())
        .then((response) => {
          response.accessToken
            ? setLoginIsSubmitted(true)
            : setLoginIsSubmitted(false);
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
    <Card className={styles.login}>
      <div className={styles.title}>Login</div>
      <form onSubmit={submitHandler}>
        <div className={styles.input_container}>
          <label>Username</label>
          <input
            id="Username"
            type="text"
            name="username"
            value={loginUserData.username}
            onChange={usernameChangeHandler}
            required
          />
        </div>
        <div className={styles.input_container}>
          <label>Password</label>
          <input
            id="Password"
            type="password"
            name="password"
            value={loginUserData.password}
            onChange={passwordChangeHandler}
            minLength={6}
            required
          />
        </div>
        <div className={styles.button_container}>
          <button id="LogIn" type="submit">Log In</button>
        </div>
      </form>
      <div className={styles.button_container}>
        <button id="Register" type="submit" onClick={registerHandler}>Register</button>
      </div>
    </Card>
  );
};

export default LoginForm;
