import Navigation from '../../pages/Home/Navigation/Navigation';
import User from '../../pages/Home/User/User';

import SpecificHomePage from './SpecificHomePage';

import React from 'react';

import './Home.css';

const Home = (props) => {

  return(
    <div className='main-column-3'>
      <Navigation />
      <SpecificHomePage page={props.main} />
      <User />
    </div>
  );
}

export default Home;