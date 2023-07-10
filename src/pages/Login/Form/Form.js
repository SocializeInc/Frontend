import React, { useState } from "react";

import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/RegisterForm";
import './Form.css';

const Form = () => {

  const [isRegisterPage, setIsRegisterPage] = useState(false);

  const registeredCheckHandler = state => {
    setIsRegisterPage(state);
  };

  return(
    <div>{
      isRegisterPage
      ? <RegisterForm 
        onChangeRegister={registeredCheckHandler} />
      : <LoginForm
        onChangeRegister={registeredCheckHandler} />}
    </div>
  );
};

export default Form;