import React from "react";
import style from "./ProfileInfo.module.scss";

const ProfileInfo = (props) => {
  return (
    <div className={style.upperContent}>
      <div>
        <img src="https://www.indoindians.com/wp-content/uploads/2020/01/2020-fashion-trends-feature-1280x720.jpg" alt="/" />
      </div>

      <div className={style.descriptionBlock}>
        ava + description
     </div>
    </div>
  );
};

export default ProfileInfo;
