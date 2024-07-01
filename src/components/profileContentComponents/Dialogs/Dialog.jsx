import cl from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const DialogItem = (props) => {

    const path = '/DIALOGS/' + props.id

    return <div className={cl.item}>
        <NavLink to={path} className={onActive}>{props.name}</NavLink></div>

}
const onActive = ({isActive}) => isActive ? `${cl.active}` : ''