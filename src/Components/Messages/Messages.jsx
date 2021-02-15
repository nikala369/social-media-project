import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import style from './Messages.module.scss';
import MessagesDiv from './MessagesDiv/MessagesDiv';


const Messages = (props) => {

    let dialogElements = props.dialogsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.messagesData
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