import styles from './InformationBlock.module.css';

const InformationBlock = (props) => {
  const classes = props.className + ' ' + styles.block
  
  return(
    <div className={classes}>
      <p>{props.header}:</p>
      <span></span>
    </div>
  );
};

export default InformationBlock;