import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Message from "../../../components/UI/Message";
import SendMessage from "./SendMessage.js";

import styles from "./ChatBox.module.css";
import Cookies from "universal-cookie";

const ChatBox = (props) => {
  const cookies = new Cookies();
  const backLogo = require("../../../assets/back_arrow.png");

  const [data, setData] = useState([]);
  const scroll = useRef();
  const navigate = useNavigate();
  let { id } = useParams();


async function fetchData() {
  const response = await fetch(`http://localhost:8080/socialize/api/messages/${id}/getMessages`, {
    method: "get",
    headers: {
      Authorization: `Bearer ${cookies.get("accessToken")}`,
    },
  })
  const data = await response.json();
  return data;
}

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      setData(data);
    })();
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
            <Message key={message.id} className={message} message={message} />
          ))}
          <span ref={scroll}></span>
        </div>
      </div>
      <SendMessage scroll={scroll} />
    </div>
  );
};

export default ChatBox;
