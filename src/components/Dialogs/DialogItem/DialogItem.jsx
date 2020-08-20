import React from "react";
import classes from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
let path = '/messages/'+props.id;
    return (<div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
            <div> <img src={props.avatar}/></div>
        </div>

    );
}



export default DialogItem;