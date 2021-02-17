import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Messages.module.scss";
import MessagesDiv from "./MessagesDiv/MessagesDiv";

const Messages = (props) => {
  let dialogElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messagesData.map((message) => (
    <MessagesDiv message={message.message} id={message.id} />
  ));

  let sendMessageElement = React.createRef();
  let sendMessage = () => {
    let textFromInput = sendMessageElement.current.value;
    props.sendMessage();
  };

  let onChangeMessage = () => {
    
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogElements}</div>
      <div className={style.messages}>{messagesElements}</div>

      <div className={style.sendMessage}>
        <div>
          <textarea onChange={onChangeMessage} ref={sendMessageElement}></textarea>
        </div>
        <div>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
