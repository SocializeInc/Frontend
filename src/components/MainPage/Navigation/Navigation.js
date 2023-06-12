import NavigationCard from '../../UI/NavigationCard';

import './Navigation.css';

const Navigation = () => {
  return(
    <div className='navigation-block'>
      <NavigationCard title="Home"/>
      <NavigationCard title="Notifications"/>
      <NavigationCard title="Messages"/>
      <NavigationCard title="Bookmarks"/>
    </div>
  );
};

export default Navigation;