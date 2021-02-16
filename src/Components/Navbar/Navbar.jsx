import React from "react";
import style from "./Navbar.module.scss";
import { NavLink, Route } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className={style.mainNavbar}>
      <ul>
        <li><NavLink to="/Profile" className={style.navList} activeClassName={style.active} >Profile</NavLink></li>
        <li><NavLink to="/Dialogs" className={style.navList} activeClassName={style.active}>Messages</NavLink></li>
        <li><NavLink to="/News" className={style.navList} activeClassName={style.active}>News</NavLink></li>
        <li><NavLink to="/Music" className={style.navList} activeClassName={style.active}>Music</NavLink></li>
        <li><NavLink to="/Settings" className={style.navList} activeClassName={style.active}>Settings</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
