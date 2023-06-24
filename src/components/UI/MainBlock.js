import styles from "./MainBlock.module.css";

const MainBlock = (props) => {
  const classes = props.className + " " + styles.block;
  return <div className={classes}>{props.children}</div>;
};

export default MainBlock;
