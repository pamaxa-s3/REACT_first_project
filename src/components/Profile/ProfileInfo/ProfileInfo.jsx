import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.profileInfo}>
      <img
        src="https://www.kindpng.com/picc/m/121-1217397_group-of-people-png-group-of-happy-people.png"
        alt=""
      />
      <div className={s.descriptionBlock}>
        <div className={s.title}>
          <h3>My posts</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
