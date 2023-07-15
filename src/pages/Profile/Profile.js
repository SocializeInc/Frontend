import styles from './Profile.module.css';

import UserInformation from './UserInformation/UserInformation';
import UserContent from './UserContent/UserContent';

const Profile = () => {
  return(
    <div className={styles.profile_container}>
      <UserInformation />
      <UserContent />
    </div>
  );
};

export default Profile;