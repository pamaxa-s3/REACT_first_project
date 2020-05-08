import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={styles.profileInfo}>
      {/* <img
        src="https://www.kindpng.com/picc/m/121-1217397_group-of-people-png-group-of-happy-people.png"
        alt=""
      /> */}
      <div className={styles.descriptionBlock}>
        <div className={styles.title}>
          <h3>My posts</h3>
        </div>
        <div className={styles.avatar}>
          <img src={props.profile.photos.small} alt="" />
        </div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        <div className={styles.aboutMe}>{props.profile.aboutMe}</div>
        <div className={styles.lookingForAJob}>{props.profile.lookingForAJob}</div>
        <div className={styles.lookingForAJobDescription}>{props.profile.lookingForAJobDescription}</div>
        <div className={styles.fullName}>{props.profile.fullName}</div>
        <div className={styles.contacts}>
          <div className={styles.facebook}>{props.profile.contacts.facebook}</div>
          <div className={styles.website}>{props.profile.contacts.website}</div>
          <div className={styles.vk}>{props.profile.contacts.vk}</div>
          <div className={styles.twitter}>{props.profile.contacts.twitter}</div>
          <div className={styles.instagram}>{props.profile.contacts.instagram}</div>
          <div className={styles.youtube}>{props.profile.contacts.youtube}</div>
          <div className={styles.github}>{props.profile.contacts.github}</div>
          <div className={styles.mainLink}>{props.profile.contacts.mainLink}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
