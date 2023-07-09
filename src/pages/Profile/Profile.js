import styles from './Profile.module.css';

import UserInformation from './UserInformation/UserInformation';
import UserContent from './UserContent/UserContent';

const Profile = () => {
  return(
    <>
      <UserInformation />
      <UserContent />
    </>
  );
};

export default Profile;