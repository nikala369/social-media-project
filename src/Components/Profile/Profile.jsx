import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.scss';


const Profile = () => {

   return (
      <div className={style.mainContent}>
         <div>
            <img src="https://www.indoindians.com/wp-content/uploads/2020/01/2020-fashion-trends-feature-1280x720.jpg" alt="/" />
         </div>

         <div>
            ava + description
      </div>
         <MyPosts />
      </div>
   );
}


export default Profile;