import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Messages.module.scss';

const DialogItem = (props) => {

    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={"/dialogs/1" + props.id}>Petre</NavLink>
        </div>
    );
}

const MessagesDiv = (props) => {

    return (
        <div className={style.dialog}>{props.message}</div>
    );
}


const Messages = (props) => {

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem name="David" id="1"/>
                <DialogItem name="Nika" id="2"/>
                <DialogItem name="Kety" id="3"/>
                <DialogItem name="Jon" id="4"/>
                <DialogItem name="Mery" id="5"/>
                <DialogItem name="James" id="6"/>
                <DialogItem name="Mia" id="7"/>
            </div>
            <div className={style.messages}>
                <MessagesDiv message="Hi" id="1"/>
                <MessagesDiv message="How are you?" id="2"/>
                <MessagesDiv message="Wazzaapp" id="3"/>
            </div>


        </div>
    );
}


export default Messages;