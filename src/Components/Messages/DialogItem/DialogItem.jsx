import React from "react";
import { NavLink } from 'react-router-dom';
import style from './../Messages.module.scss';



const DialogItem = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={"/dialogs/1" + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;