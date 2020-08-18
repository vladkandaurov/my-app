import React from "react";
import classes from '../css/Header.module.css';

const Header = () =>{
    return(
        <header className={classes.header}>
            <img
                src='https://www.roscosmos.ru/media/files/identity/roscosmos-logo-main-colorback-eng.png'/>
        </header>
    );

}
export default Header;