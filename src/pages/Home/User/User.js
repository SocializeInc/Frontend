import MainBlock from '../../UI/MainBlock';
import Card from '../../UI/Card'; 
import './User.css';

const User = () => {

  const logo = require('../../../assets/user.png');

  return(
    <MainBlock>
      <Card className='user'>
        <img className='photo' src={logo} alt='User logo'/>
        <div className='username'>adamdara</div>
      </Card>
    </MainBlock>
  );
};

export default User;