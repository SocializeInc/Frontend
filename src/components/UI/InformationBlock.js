import styles from './InformationBlock.module.css';

const InformationBlock = (props) => {
  const classes = props.className + ' ' + styles.block
  
  return(
    <div className={classes}>
      <p>First Name:</p>
      <span>Adam</span>
    </div>
  );
};

export default InformationBlock;