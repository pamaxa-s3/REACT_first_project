import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={styles.profileInfo}>
      <img
        src="https://www.kindpng.com/picc/m/121-1217397_group-of-people-png-group-of-happy-people.png"
        alt=""
      />
      <div className={styles.descriptionBlock}>
        <div className={styles.title}>
          <h3>My posts</h3>
          <div className={styles.avatar}>
            <img src={props.profile.photos.small} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
