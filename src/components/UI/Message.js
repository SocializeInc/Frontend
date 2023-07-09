import styles from "./Message.module.css";

const Message = ({ message }) => {
  return (
    <div className={styles.message_body} id={message.id}>
      {/* <p>Adam</p> */}
      <p>{message.text}</p>
    </div>
  );
};

export default Message;
