import Navigation from './Navigation/Navigation';
import Feed from './Feed/Feed';

import './Main.css';
import User from './User/User';

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