import styles from './BlockButton.module.css';

const BlockButton = (props) => {

  const classes = props.className + ' ' + styles.block_button

  const click = props.onClick

  return(
    <div id={props.id} className={classes} onClick={click}>{props.children}</div>
  );
};

export default BlockButton;