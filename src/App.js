import './App.css';

import React, { useState } from "react";

import "./styles.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isLoginSubmitted, setLoginIsSubmitted] = useState(false);
  const [isRegisterPage, setRegisterPage] = useState(false);
  const [isRegisterSubmitted, setRegisterIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    loginUname: "Invalid username",
    loginPass: "Invalid password",
    firstName: "First name can't be empty!",
    lastName: "First name can't be empty!",
    registerPass: "Password too short!",
    registerPassAgain: "Passwords don't match!"
  };

  const handleLogin = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "loginPass", message: errors.loginPass });
      } else {
        setLoginIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "loginUname", message: errors.loginUname });
    }
  };

  const handleRegister = (event) => {
    //Prevent page reload
    event.preventDefault();

    setRegisterIsSubmitted(false);

    var { firstName, lastName, pass, passAgain } = document.forms[0];

    if (!firstName.value) {
      setErrorMessages({ name: "firstName", message: errors.firstName });
    } else if (!lastName.value){
      setErrorMessages({ name: "lastName", message: errors.lastName });
      // Invalid password length
    } /*else if (!pass.value) {
      setErrorMessages({ name: "registerPass", message: errors.registerPass });
        // Passwords dont match
    } else if(pass.value !== passAgain.value) {
      setErrorMessages({ name: "registerPassAgain", message: errors.registerPassAgain });
    } */else {
        setRegisterPage(false);
        setRegisterIsSubmitted(true);
    }
    };

    const handleBack = (event) => {
      //Prevent page reload
      event.preventDefault();
      setRegisterPage(false);
      };

  const loadRegister = (event) => {
    event.preventDefault();
    setRegisterPage(true);
    setRegisterIsSubmitted(false);
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderLoginForm = (
    <div className="form">
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="loginUname" required />
          {renderErrorMessage("loginUname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="loginPass" required />
          {renderErrorMessage("loginPass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Log In"/>
        </div>
      </form>
      <form onSubmit={loadRegister}>
        <div className="button-container">
            <input type="submit" value="Register"/>
        </div>
      </form>
    </div>
  );

  const renderRegisterForm = (
    <div className="form">
      <form onSubmit={handleRegister}>
        <div className="input-container">
          <label>First Name </label>
          <input type="text" name="firstName" required />
          {renderErrorMessage("firstName")}
        </div>
        <div className="input-container">
          <label>Last Name </label>
          <input type="text" name="lastName" required />
          {renderErrorMessage("lastName")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="registerPass" minLength={6} required />
          {renderErrorMessage("registerPass")}
        </div>
        <div className="input-container">
          <label>Password Again </label>
          <input type="password" name="registerPassAgain" minLength={6} required />
          {renderErrorMessage("registerPassAgain")}
        </div>
        <div className="button-container">
          <input type="submit" value="Register"/>
        </div>
      </form>
      <form onSubmit={handleBack}>
        <div className="button-container">
          <input type="submit" value="Back"/>
        </div>
      </form>
    </div>
  );

  const renderLogin = ( 
    <div className="login-form">
      <div className="title">Sign In</div>
      {isLoginSubmitted ? <div>User is successfully logged in</div> : renderLoginForm}
    </div>
  );

  const renderRegister = (
    <div className="login-form">
      <div className="title">Register</div>
      {isRegisterSubmitted ? renderLogin : renderRegisterForm}
    </div>
  );

  return (
    <div className="app">
      <h1>Socialize</h1>
      {isRegisterPage ? renderRegister : renderLogin}
    </div>
  );
};

export default App;