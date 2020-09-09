import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";




const MyPosts = (props) => {
    let postsElements = props.posts.map(post=><Post message={post.post} likecounts={post.likecount}/>)
    let newPostElement=React.createRef()


    let addPost=()=>{
     props.addPost();
    }

    let onPostChange =()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);


    }

    return (
        <div className={classes.postsBlock}>
          <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}> Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;