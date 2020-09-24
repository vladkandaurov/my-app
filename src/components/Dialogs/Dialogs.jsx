import React from "react";
import classes from './Dialogs.module.css';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator, updateNewPostTextActionCreator} from "../../redux/messages-reducer";


const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements= state.dialogsData
        .map(dialog=><DialogItem name={dialog.name} id ={dialog.id} avatar={dialog.avatar}/>);
    let messagesElements = state.messagesData
        .map(message=><Message message={message.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () =>{
        props.sendMessage();

    }
    let onNewMessageChange = (e) =>{

        let body = e.target.value;
        props.updateNewMessageBody(body);


    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}


            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message'></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>


            </div>
        </div>


    );
}

export default Dialogs;