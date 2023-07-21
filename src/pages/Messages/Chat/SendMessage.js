import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./SendMessage.module.css";

import Cookies from "universal-cookie";

const SendMessage = ({ targetName, sentMessage }) => {
  const cookies = new Cookies();
  const sendEnabledLogo = require("../../../assets/send_message_enabled.png");
  const sendDisabledLogo = require("../../../assets/send_message_disabled.png");
  const [message, setMessage] = useState("");
  let { id } = useParams();

  const sendHandler = (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      return;
    }
    (async () => {
      await fetch(
        `http://localhost:8080/socialize/api/messages/${id}/sendMessage`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + cookies.get("accessToken"),
          },
          body: JSON.stringify({
            targetName: targetName,
            message: message,
          }),
        }
      );
    })();
    setMessage("");
    sentMessage(true);
  };

  useEffect(() => {
    sentMessage(false)
  }, [])

  return (
    <div className={styles.send_container} >
      <input
        className={styles.message_bar}
        value={message}
        placeholder="Start a new message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        id="Send"
        className={styles.send_message}
        type="button"
        onClick={sendHandler}
        disabled={message !== "" ? false : true}
      >
        <img className={message !== "" ? styles.send_photo : styles.send_disabled} src={message !== "" ? sendEnabledLogo : sendDisabledLogo} alt="Send" />
      </button>
    </div>
  );
};

export default SendMessage;
