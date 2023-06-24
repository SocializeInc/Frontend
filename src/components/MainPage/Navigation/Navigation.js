import NavigationButton from '../../UI/NavigationButton';
import MainBlock from '../../UI/MainBlock';

import './Navigation.css';

const Navigation = () => {
  return(
    <MainBlock>
      <NavigationButton title="Home"/>
      <NavigationButton title="Notifications"/>
      <NavigationButton title="Messages"/>
      <NavigationButton title="Bookmarks"/>
    </MainBlock>
  );
};

export default Navigation;