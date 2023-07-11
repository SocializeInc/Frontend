import React from "react";

import Form from '../../pages/Login/Form/Form';

import styles from './Auth.module.css';

const Auth = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.main_title}>Socialize</h1>
      <Form/>
    </div>
  );
};

export default Auth;
