import Navigation from '../../components/MainPage/Navigation/Navigation';
import Feed from '../../components/MainPage/Feed/Feed';

import './Main.css';
import User from '../../components/MainPage/User/User';

const Main = () => {
  return(
    <div className='main-column-3'>
      <Navigation />
      <Feed />
      <User />
    </div>
  );
}

export default Main;