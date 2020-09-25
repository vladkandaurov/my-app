import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";



const Profile = (props) => {




    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer


                />
        </div>
    );
}

export default Profile;
