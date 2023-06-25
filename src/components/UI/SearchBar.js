import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  const classes = props.className;

  return (
    <div className={classes}>
      <input className={styles.bar} placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
