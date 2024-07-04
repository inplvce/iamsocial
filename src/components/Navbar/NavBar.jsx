import React from "react";
import cl from './NavBar.module.css';
import {NavLink} from 'react-router-dom'
import {Dialogs} from "../profileContentComponents/Dialogs/Dialogs";



const NavBarLink = (props) => {



    return <div className={cl.item}>
        <NavLink to={props.rout} className={onActive}>{props.name}</NavLink></div>

}

const onActive = ({isActive}) => isActive ? `${cl.active}` : ''

export const NavBar = (props) => {

    const {state} = props

    return (

        <nav className={cl.nav}>
            <NavBarLink name={'Profile'} rout={'/PROFILE'} activeClassName={cl.active}/>
            <NavBarLink name={'Messages'} rout={'/DIALOGS'} activeClassName={cl.active}/>
            <NavBarLink name={'News'} rout={'/NEWS'} activeClassName={cl.active}/>
            <NavBarLink name={'Music'} rout={'/MUSIC'} activeClassName={cl.active}/>
            <NavBarLink name={'Settings'} rout={'/SETTINGS'} activeClassName={cl.active}/>
            {state && state.dialogsPage ? (
                <Dialogs state={state.dialogsPage.usersData} />
            ) : (
                <p>Loading...</p> // Or any fallback UI
            )}
        </nav>

    )
}