import React, { useState } from "react";

import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/RegisterForm";
import './Form.css';

const Form = (props) => {

  const [isRegisterPage, setIsRegisterPage] = useState(false);

  const registeredCheckHandler = state => {
    setIsRegisterPage(state);
  };

  return(
    <div>{
      isRegisterPage
      ? <RegisterForm 
        users={props.users}
        onChangeRegister={registeredCheckHandler} />
      : <LoginForm
        users={props.users}
        onChangeRegister={registeredCheckHandler} />}
    </div>
  );
};

export default Form;