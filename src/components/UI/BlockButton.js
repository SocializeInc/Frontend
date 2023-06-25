import styles from './BlockButton.module.css';

const BlockButton = (props) => {

  const classes = props.className + ' ' + styles.block_button

  return(
    <div id={props.id} className={classes}>{props.children}</div>
  );
};

export default BlockButton;