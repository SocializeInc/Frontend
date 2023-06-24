import Navigation from '../../pages/Home/Navigation/Navigation';
import Feed from '../../pages/Home/Feed/Feed';
import User from '../../pages/Home/User/User';

import './Home.css';

const Home = () => {
  return(
    <div className='main-column-3'>
      <Navigation />
      <Feed />
      <User />
    </div>
  );
}

export default Home;