import NavigationButton from "../../../components/UI/NavigationButton";
import MainBlock from "../../../components/UI/MainBlock";

import styles from "./Navigation.module.css";

const Navigation = () => {

  return (
    <MainBlock>
      <div className={styles.nav_elements}>
        <NavigationButton title="Home" goTo="/home" />
        <NavigationButton title="Notifications" />
        <NavigationButton title="Messages" goTo="/messages" />
        <NavigationButton title="Bookmarks" />
        <NavigationButton className={styles.profile} title="Profile" goTo="/profile"/>
      </div>
    </MainBlock>
  );
};

export default Navigation;
