import NavigationButton from '../../../components/UI/NavigationButton';
import MainBlock from '../../../components/UI/MainBlock';

import './Navigation.css';

import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const handleOnHomeClick = () => navigate("/home");

  return(
    <MainBlock>
      <NavigationButton title="Home" goTo={handleOnHomeClick}/>
      <NavigationButton title="Notifications"/>
      <NavigationButton title="Messages"/>
      <NavigationButton title="Bookmarks"/>
    </MainBlock>
  );
};

export default Navigation;