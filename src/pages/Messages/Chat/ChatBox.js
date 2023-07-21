import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Message from "../../../components/UI/Message";
import SendMessage from "./SendMessage.js";

import styles from "./ChatBox.module.css";
import Cookies from "universal-cookie";

const ChatBox = () => {
  const cookies = new Cookies();
  const backLogo = require("../../../assets/back_arrow.png");
  const [fetchable, setFetchable] = useState(true);

  const [data, setData] = useState([]);
  const messagesEndRef = useRef();
  const navigate = useNavigate();
  let { id } = useParams();

  function fetchData () {
    console.log("fetching");
    (async () => {
      await fetch(
        `http://localhost:8080/socialize/api/messages/${id}/getMessages`,
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${cookies.get("accessToken")}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    })();
  };

  const shouldFetch = (bool) => {
    setFetchable(bool);
  };

  useEffect(() => {
    if (fetchable) {
      console.log("Ha fetchelhető");
      fetchData();
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setFetchable(false);
    }
  }, [fetchable]);

  useEffect(() => {
    console.log(data)
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.partner_header}>
        <span className={styles.partner_name}>{data.roomName}</span>
        <button
          id="Back"
          className={styles.back}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          <img className={styles.back_logo} src={backLogo} alt="Back"></img>
        </button>
      </div>
      <div className={styles.messages_container}>
        <div className={styles.messages}>
          {data.messages?.map((message) => (
            <div
              key={message.id}
              className={
                message.sourceId === 57
                  ? styles.received_messages
                  : styles.sent_messages
              }
            >
              <Message
                key={message.id}
                className={message.sourceId === 57 ? styles.received : ``}
                message={message}
              />
            </div>
          ))}
          <span ref={messagesEndRef}></span>
        </div>
      </div>
      <SendMessage targetName={data.roomName} sentMessage={shouldFetch} />
    </div>
  );
};

export default ChatBox;
