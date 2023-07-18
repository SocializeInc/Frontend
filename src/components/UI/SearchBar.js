import SearchResult from "./SearchResult";

import styles from "./SearchBar.module.css";
import { useEffect, useState } from "react";

import Cookies from "universal-cookie";

const SearchBar = (props) => {
  const cookies = new Cookies();
  const [results, setResults] = useState([]);

  const submitHandler = (event) => {
    const data = event.target.value;
    event.preventDefault();
    (async () => {
      await fetch("http://localhost:8080/socialize/api/search/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + cookies.get("accessToken")
        },
        body: JSON.stringify({
          data: data,
        }),
      })
        .then((response) => response.json())
        .then((response) =>
          response.message !== "Error: No search data has been provided"
            ? setResults(response.users)
            : setResults([])
        )
        .catch((err) => console.log(err));
    })();
  };

  useEffect(() => {}, [results]);

  return (
    <form onChange={submitHandler}>
      <input
        className={styles.bar}
        id="Search"
        type="text"
        placeholder="Search..."
        autoComplete="off"
      />
      {results.length !== 0 && (
        <div className={styles.backdrop}>
          <div className={styles.results}>
              {results?.map((result) => (
                <SearchResult
                  key={result.username}
                  firstname={result.firstname}
                  lastname={result.lastname}
                  username={result.username}
                  page={props.page}
                  onClick={props.page === "messages" ? () => props.chatRoom(result.username) : () => props.userProfile(result.username)}
                />
              ))}
          </div>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
