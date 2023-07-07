import styles from './Message.module.css';

const Message = ({ message }) => {
const classes = styles.message_body + ' ' + message.className 

  return (
    <div className={classes}>
      {/* <p>Adam</p> */}
      <p>{message.text}</p>
    </div>
  );
};

export default Message;
