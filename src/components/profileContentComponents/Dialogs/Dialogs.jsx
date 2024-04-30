import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

const onActive = ({isActive}) => isActive ? `${cl.active}` : ''

export const Dialogs = () => {
    return <div className={cl.dialogs}>
        <div className={cl.dialogsItems}>

            <div className={cl.dialog + ' ' + cl.active}>
                <NavLink to={''} className={onActive}>User1</NavLink>
            </div>
            <div className={cl.dialog + ' ' + cl.active}>
                <NavLink to={''} className={onActive}>User2</NavLink>
            </div>
            <div className={cl.dialog + ' ' + cl.active}>
                <NavLink to={''} className={onActive}>User3</NavLink>
            </div>


            <div className={cl.dialogs + ' ' + cl.active}>User1</div>
            <div className={cl.dialog + ' ' + cl.active}>User2</div>
            <div className={cl.dialog + ' ' + cl.active}>User3</div>
        </div>
        <div className={cl.messages}>
            <div className={cl.message}>Message1</div>
            <div className={cl.message}>Message2</div>
            <div className={cl.message}>Message3</div>
        </div>
    </div>

}