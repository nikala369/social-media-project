import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Messages.module.scss";
import MessagesDiv from "./MessagesDiv/MessagesDiv";
import {
  sendMessageActionCreator,
  updateMessageActionCreator,
} from "./../../Redux/state";

const Messages = (props) => {
  let dialogElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.state.messagesData.map((message) => (
    <MessagesDiv message={message.message} id={message.id} />
  ));

  let newMessageDialogs = props.state.newMessageDialogs;

  let onSendMessageClick = () => {
    props.dispatch(sendMessageActionCreator());
  };

  let onChangeMessage = (e) => {
    let textFromInput = e.target.value;
    props.dispatch(updateMessageActionCreator(textFromInput));
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogElements}</div>
      <div className={style.messages}>{messagesElements}</div>

      <div className={style.sendMessage}>
        <div>
          <textarea
            onChange={onChangeMessage}
            placeholder="Enter Your message"
            value={newMessageDialogs}
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
