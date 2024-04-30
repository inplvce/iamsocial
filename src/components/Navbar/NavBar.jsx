import React from "react";
import cl from './NavBar.module.css';
import {NavLink} from 'react-router-dom'


const onActive = ({isActive}) => isActive ? `${cl.active}` : ''

export const NavBar = () => {

    return (

        <nav className={cl.nav}>

            <div className={cl.item}>
                <NavLink to={'PROFILE'} className={onActive}>Profile</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to={'DIALOGS'} className={onActive}>Messages</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to={'NEWS'} className={onActive}>News</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to={'MUSIC'} className={onActive}>Music</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to={'SETTINGS'} className={onActive}>Settings</NavLink>
            </div>
        </nav>

    )
}