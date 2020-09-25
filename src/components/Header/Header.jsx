import React from "react";
import classes from '../css/Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () =>{
    return(
        <header className={classes.header}>
            <img src='https://www.roscosmos.ru/media/files/identity/roscosmos-logo-main-colorback-eng.png'/>
            <div className={classes.loginBlock}>
                <NavLink to={"/login"}>Login</NavLink>
            </div>

        </header>
    );

}
export default Header;