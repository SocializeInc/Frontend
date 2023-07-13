import Navigation from "../../pages/Home/Navigation/Navigation";
import User from "../../pages/Home/User/User";
import SpecificHomePage from "./SpecificHomePage";

import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <div className={`${styles.main_column_3}`}>
      <Navigation />
      <SpecificHomePage className={styles.specific_column} page={props.main} />
      <User />
    </div>
  );
};

export default Home;
