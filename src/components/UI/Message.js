import styles from "./Message.module.css";

const Message = (props) => {
  const classes = `${props.className} ${styles.message_body}`;

  return (
    <div className={classes} id={props.message.id}>
      {/* <p>Adam</p> */}
      <p>{props.message.message}</p>
    </div>
  );
};

export default Message;
