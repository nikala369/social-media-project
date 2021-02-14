import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Messages.module.scss';

const DialogItem = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={"/dialogs/1" + props.id}>{props.name}</NavLink>
        </div>
    );
}

const MessagesDiv = (props) => {

    return (
        <div className={style.dialog}>{props.message}</div>
    );
}


const Messages = (props) => {
    // Data
    let dialogsData = [
        { id: 1, name: 'David'},
        { id: 2, name: 'Nika'},
        { id: 3, name: 'Kety'},
        { id: 4, name: 'Jone'},
        { id: 5, name: 'Mery'},
        { id: 6, name: 'James'},
        { id: 7, name: 'Mia'},
    ]

    let messagesData = [
        {id: 1, message:'Hi' },
        {id: 2, message:'How are you?'},
        {id: 1, message: 'Wazzaapp'},
    ]

    //Maping

    let dialogElements = dialogsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = messagesData
    .map(message => <MessagesDiv message={message.message} id={message.id} />);
    

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>


        </div>
    );
}


export default Messages;