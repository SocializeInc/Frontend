import React, { useState } from "react";
import UserFormCard from "../../../UI/UserFormCard";

import "./RegisterForm.css";

const RegisterForm = (props) => {
  const [registeredUserData, setRegisteredUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const firstNameChangeHandler = (event) => {
    setRegisteredUserData((prevState) => {
      return { ...prevState, firstName: event.target.value };
    });
  };

  const lastNameChangeHandler = (event) => {
    setRegisteredUserData((prevState) => {
      return { ...prevState, firstName: event.target.value };
    });
  };

  const usernameChangeHandler = (event) => {
    setRegisteredUserData((prevState) => {
      return { ...prevState, username: event.target.value };
    });
  };

  const emailChangeHandler = (event) => {
    setRegisteredUserData((prevState) => {
      return { ...prevState, email: event.target.value };
    });
  };

  const passwordChangeHandler = (event) => {
    setRegisteredUserData((prevState) => {
      return { ...prevState, password: event.target.value };
    });
  };

  //TODO: Give JSON forward
  const submitHandler = (event) => {
    event.preventDefault();

    if (!registeredUserData.firstName) {
      console.log("First Name is empty");
    } else if (!registeredUserData.lastName) {
      console.log("Last name is empty");
    }

    const userData = {
      firstName: registeredUserData.firstName,
      lastName: registeredUserData.lastName,
      username: registeredUserData.username,
      email: registeredUserData.email,
      password: registeredUserData.password,
    };

    //TODO: send userData JSON to backend
    setRegisteredUserData({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    });
  };

  const backToLoginHandler = (event) => {
    event.preventDefault();
    props.onChangeRegister(false);
  };

  return (
    <div>
      <UserFormCard title="Register">
        <form onSubmit={submitHandler}>
          <div className="input-container">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={registeredUserData.firstName}
              onChange={firstNameChangeHandler}
              required
            />
          </div>
          <div className="input-container">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={registeredUserData.lastName}
              onChange={lastNameChangeHandler}
              required
            />
          </div>
          <div className="input-container">
            <label>Username</label>
            <input
              type="text"
              name="lastName"
              value={registeredUserData.username}
              onChange={usernameChangeHandler}
              required
            />
          </div>
          <div className="input-container">
            <label>E-Mail</label>
            <input
              type="text"
              name="lastName"
              value={registeredUserData.email}
              onChange={emailChangeHandler}
              required
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              name="registerPass"
              value={registeredUserData.password}
              onChange={passwordChangeHandler}
              minLength={6}
              required
            />
          </div>
          <div className="input-container">
            <label>Password Again</label>
            <input
              type="password"
              name="registerPassAgain"
              minLength={6}
              required
            />
          </div>
          <div className="button-container">
            <input type="submit" value="Register" />
          </div>
        </form>
        <div className="button-container">
          <input type="submit" value="Back" onClick={backToLoginHandler} />
        </div>
      </UserFormCard>
    </div>
  );
};

export default RegisterForm;
