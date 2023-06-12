import Navigation from './Navigation/Navigation';
import Feed from './Feed/Feed';

import './Main.css';

const Main = () => {
  return(
    <div className='main-column-3'>
      <Navigation />
      <Feed />
    </div>
  );
}

export default Main;