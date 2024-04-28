import React from "react";
import cl from './NavBar.module.css';
import {NavLink} from 'react-router-dom'

// let cl = {
//     'nav': 'NavBar_nav__IQUWY',
//     'item': 'NavBar_item__9kGvf'
// }

// let c1 = 'item';
// let c2 = 'active';
//
// let cl = c1 + ' ' + c2
// let classecActive = `${cl.item} ${c2}`;

const onActive = ({isActive}) => isActive ? `${cl.active}` : ''

export const NavBar = () => {

    return (

        <nav className={cl.nav}>

            <div className={cl.item}>
                <NavBar to={'PROFILE'} className={onActive}>Profile</NavBar>
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