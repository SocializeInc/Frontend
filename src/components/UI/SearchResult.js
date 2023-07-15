import styles from "./SearchResult.module.css";

const SearchResult = (props) => {
  const concat = " ";

  return (
    <div className={styles.container}>
      <div>
        <div>
          {props.firstname}
          {concat}
          {props.lastname}
        </div>
        <div>@{props.username}</div>
      </div>
    </div>
  );
};

export default SearchResult;
