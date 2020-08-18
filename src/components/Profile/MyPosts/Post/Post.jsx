import React from "react";
import classes from './Post.module.css';


const Post = (props)=>{


    return(

                <div className={classes.item}>
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU'}/>
                    { props.message}
                    <div>
                        <span>Like {props.likecounts}</span>
                    </div>
                </div>


    );
}

export default Post;