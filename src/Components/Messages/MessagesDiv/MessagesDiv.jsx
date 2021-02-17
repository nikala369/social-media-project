import React from "react";
import style from './../Messages.module.scss';

const MessagesDiv = (props) => {

    return (
        <div className={style.dialog}>{props.message}</div>

    );
}

export default MessagesDiv;