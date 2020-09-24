import React from "react";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/messages-reducer";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";






let mapStateToProps = (state)=>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }

}
let mapDispatchToProps = (dispatch)=>{
    return{
        updateNewPostText:(text)=>{
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        },
        addPost:()=>{
            dispatch(addPostActionCreator())
        }

    }

}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;