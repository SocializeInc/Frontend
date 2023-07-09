import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../../../firebase";
import Message from "../../../components/UI/Message";
import SendMessage from "./SendMessage.js";

import styles from "./ChatBox.module.css";

const ChatBox = ({ backToUsers }) => {
  const backLogo = require("../../../assets/back_arrow.png");

  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe;
  }, []);

  return (
    <>
      <div className={styles.partner_header}>
        <span className={styles.partner_name}>Random user</span>
        <button
          id="Back"
          className={styles.back}
          onClick={() => backToUsers(true)}
        >
          <img className={styles.back_logo} src={backLogo} alt="Back"></img>
        </button>
      </div>
      <div className={styles.messages_container}>
        <div className={styles.messages}>
          {messages?.map((message) => (
            <Message className={message} message={message} />
          ))}
          <span ref={scroll}></span>
        </div>
      </div>
      <SendMessage scroll={scroll} />
    </>
  );
};

export default ChatBox;
