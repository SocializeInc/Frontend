import styles from "./SearchResult.module.css";

const SearchResult = (props) => {

  return (
    <div className={styles.container}>
      <div onClick={props.onClick}>
        <div>{`${props.firstname} ${props.lastname}`}
        </div>
        <div>@{props.username}</div>
      </div>
    </div>
  );
};

export default SearchResult;
