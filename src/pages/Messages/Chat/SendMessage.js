import React, { useState } from "react";
import { db } from "../../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import styles from './SendMessage.module.css';

const SendMessage = () => {
  const sendLogo = require("../../../assets/send_message.png");

  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    // const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      // name: displayName,
      // avatar: photoURL,
      createdAt: serverTimestamp(),
      // uid,
    });
    setMessage("");
  };

  return (
    <form className={styles.send_container} onSubmit={sendMessage}>
      <input className={styles.message_bar} value={message} placeholder="Start a new message" onChange={(e) => setMessage(e.target.value)} />
      <button id="Send" class={styles.send_message} type="submit">
        <img className={styles.send_photo} src={sendLogo} alt="Send" />
      </button>
    </form>
  );
};

export default SendMessage;
