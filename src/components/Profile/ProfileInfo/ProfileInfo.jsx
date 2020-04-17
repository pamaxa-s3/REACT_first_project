import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
     return (
          <div className={s.profileInfo}>
               <img src="https://www.cdc.gov/hrqol/images/community-medium.jpg" alt="" />
               <div className={s.descriptionBlock}>
                    <div className={s.title}>
                         <h3>My posts</h3>
                    </div>
                    <div className={s.addPost}>
                         <form action="#">
                              <div>
                                   <textarea></textarea>
                              </div>
                              <div>
                                   <button type='submit'>Add post</button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>

     );
}

export default ProfileInfo;