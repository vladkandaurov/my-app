import React from "react";
import classes from './ProfileInfo.module.css';


const ProfileInfo = ()=>{
    return(
        <div>
            <div>
                <img
                    src='https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + desc
            </div>
        </div>
    );

}

export default ProfileInfo;