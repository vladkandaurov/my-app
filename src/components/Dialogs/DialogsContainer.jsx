import React from "react";
import classes from './Dialogs.module.css';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator, updateNewPostTextActionCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state)=>{
    return{
        messagesPage: state.messagesPage
    }

}
let mapDispatchToProps = (dispatch)=>{
    return{
        updateNewMessageBody:(body)=>{
            dispatch(updateNewMessageBodyCreator(body))
            },
        sendMessage:()=>{
            dispatch(sendMessageCreator())
        }

    }

}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;