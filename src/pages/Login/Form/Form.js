import React, { useState } from "react";

import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/RegisterForm";

const Form = () => {

  const [isRegisterPage, setIsRegisterPage] = useState(false);

  const registeredCheckHandler = state => {
    setIsRegisterPage(state);
  };

  return(
    <>{
      isRegisterPage
      ? <RegisterForm 
        onChangeRegister={registeredCheckHandler} />
      : <LoginForm
        onChangeRegister={registeredCheckHandler} />}
    </>
  );
};

export default Form;