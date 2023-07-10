import styles from "./Popup.module.css";

import Card from "./Card";

const PopupModal = (props) => {
  return (
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <header className={styles.header}>{props.title}</header>
        <div className={styles.content}>{props.message}</div>
        <footer className={styles.actions}>
          <button onClick={props.onConfirm}>{props.buttonText}</button>
        </footer>
      </Card>
    </div>
  );
};

export default PopupModal;
