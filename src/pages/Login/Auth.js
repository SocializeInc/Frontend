import React from "react";

import Form from '../../pages/Login/Form/Form';

import './Auth.css';

const database = [
  {
    username: "user1",
    password: "pass1"
  },
];

const Auth = () => {
  return (
    <div className="app">
      <h1 className="main_title">Socialize</h1>
      <Form users={database} />
    </div>
  );
};

export default Auth;
