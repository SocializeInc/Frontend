import NavigationButton from '../../../components/UI/NavigationButton';
import MainBlock from '../../../components/UI/MainBlock';

import './Navigation.css';

const Navigation = () => {

  return(
    <MainBlock className="options_row">
      <NavigationButton title="Home" goTo="/home"/>
      <NavigationButton title="Notifications"/>
      <NavigationButton title="Messages" goTo="/messages"/>
      <NavigationButton title="Bookmarks"/>
    </MainBlock>
  );
};

export default Navigation;