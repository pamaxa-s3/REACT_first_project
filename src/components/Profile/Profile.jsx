import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
     return (
          <div className={s.profile}>
               <MyPosts />
          </div>

     );
}

export default Profile;