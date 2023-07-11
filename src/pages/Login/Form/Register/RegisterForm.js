import React, { useEffect, useState } from "react";
import Card from "../../../../components/UI/Card";
import PopupModal from "../../../../components/UI/PopupModal";

// import multiple files with css modules
import inputContainer from './RegisterForm.module.css'
import formStyles from '../Form.module.css';
let styles = {};
Object.assign(styles, inputContainer, formStyles)



const RegisterForm = (props) => {
  const [isRegisterSubmitted, setRegisterIsSubmitted] = useState(false);

  const [registeredUserData, setRegisteredUserData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordAgain: "",
    country: "",
    birthDate: "",
    role: "",
  });

  const firstNameChangeHandler = (event) => {
    setRegisteredUserData((prevState) => {
      return { ...prevState, firstname: event.target.value };
    });
  };

  const lastNameChangeHandler = (event) => {
    setRegisteredUserData((prevState) => {
      return { ...prevState, lastname: event.target.value };
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

  const passwordAgainChangeHandler = (event) => {
    setRegisteredUserData((prevState) => {
      return { ...prevState, passwordAgain: event.target.value };
    });
  };

  const countryChangeHandler = (event) => {
    setRegisteredUserData((prevState) => {
      return { ...prevState, country: event.target.value };
    });
  };

  const birthDateChangeHandler = (event) => {
    setRegisteredUserData((prevState) => {
      return { ...prevState, birthDate: event.target.value };
    });
  };

  const [popup, setPopup] = useState(null);

  //Give JSON forward
  const submitHandler = (event) => {
    event.preventDefault();

    if (registeredUserData.password === registeredUserData.passwordAgain) {
      (async () => {
        await fetch("http://localhost:8080/socialize/api/auth/signup", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify({
            username: registeredUserData.username,
            firstname: registeredUserData.firstname,
            lastname: registeredUserData.lastname,
            email: registeredUserData.email,
            password: registeredUserData.password,
            country: registeredUserData.country,
            birthDate: registeredUserData.birthDate,
            role: [registeredUserData.username, "user"],
          }),
        })
          .then((response) => response.json())
          .then((response) => {
            response.message === "User registered successfully!"
              ? setRegisterIsSubmitted(true)
              : setRegisterIsSubmitted(false);
          })
          .catch((err) => console.log(err));
      })();
    } else {
      setPopup({
        title: "Invalid password",
        message: "The two passwords are not matching.",
        buttonText: "Confirm",
      });
    }

    setRegisteredUserData({
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordAgain: "",
      country: "",
      birthDate: "",
      role: "",
    });
  };

  useEffect(() => {
    if (isRegisterSubmitted) {
      setPopup({
        title: "Successful registration",
        message: "You successfully registered your account.",
        buttonText: "OK",
      });
    }
  }, [isRegisterSubmitted, props]);

  const closePopup = () => {
    if (isRegisterSubmitted) {
      props.onChangeRegister(false);
    }
    setPopup(null);
  };

  const backToLoginHandler = (event) => {
    event.preventDefault();
    props.onChangeRegister(false);
  };

  return (
    <>
      {popup && (
        <PopupModal
          title={popup.title}
          message={popup.message}
          buttonText={popup.buttonText}
          onConfirm={closePopup}
        />
      )}
      <Card className={styles.login}>
        <div className={styles.title}>Register</div>
        <form onSubmit={submitHandler}>
          <div className={styles.input_block_row}>
            <div className={styles.input_block_column}>
              <div className={styles.input_container}>
                <label>First Name</label>
                <input
                  id="FirstName"
                  type="text"
                  name="firstName"
                  value={registeredUserData.firstname}
                  onChange={firstNameChangeHandler}
                  required
                />
              </div>
              <div className={styles.input_container}>
                <label>Last Name</label>
                <input
                  id="LastName"
                  type="text"
                  name="lastName"
                  value={registeredUserData.lastname}
                  onChange={lastNameChangeHandler}
                  required
                />
              </div>
              <div className={styles.input_container}>
                <label>Username</label>
                <input
                  id="Username"
                  type="text"
                  name="lastName"
                  value={registeredUserData.username}
                  onChange={usernameChangeHandler}
                  required
                />
              </div>
              <div className={styles.input_container}>
                <label>E-Mail</label>
                <input
                  id="Email"
                  type="text"
                  name="lastName"
                  value={registeredUserData.email}
                  onChange={emailChangeHandler}
                  required
                />
              </div>
            </div>
            <div className={styles.input_block_column}>
              <div className={styles.input_container}>
                <label>Password</label>
                <input
                  id="Password"
                  type="password"
                  name="registerPass"
                  value={registeredUserData.password}
                  onChange={passwordChangeHandler}
                  minLength={6}
                  required
                />
              </div>
              <div className={styles.input_container}>
                <label>Password Again</label>
                <input
                  id="PasswordAgain"
                  type="password"
                  name="registerPassAgain"
                  value={registeredUserData.passwordAgain}
                  onChange={passwordAgainChangeHandler}
                  minLength={6}
                  required
                />
              </div>
              <div className={styles.input_container}>
                <label>Country</label>
                <input
                  id="Country"
                  type="text"
                  name="country"
                  value={registeredUserData.country}
                  onChange={countryChangeHandler}
                  required
                />
              </div>
              <div className={styles.input_container}>
                <label>Birth Date</label>
                <input
                  id="BirthDate"
                  type="text"
                  name="birthDate"
                  value={registeredUserData.birthDate}
                  onChange={birthDateChangeHandler}
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles.button_container}>
            <button id="Register" type="submit">
              Register
            </button>
          </div>
        </form>
        <div className={styles.button_container}>
          <button id="Back" type="submit" onClick={backToLoginHandler}>
            Back
          </button>
        </div>
      </Card>
    </>
  );
};

export default RegisterForm;
