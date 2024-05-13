import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import React, {useState} from "react";






const onActive = ({isActive}) => isActive ? `${cl.active}` : ''

export const Dialogs = () => {


    const dialogs = ['Vasyan', 'Goshan', 'Ivan', 'Snoop Dog'];

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <div className={cl.item}><NavLink to={'/DIALOGS/:DIALOG1'} className={onActive}>Vasyan</NavLink></div>
                <div className={cl.item}><NavLink to={'/DIALOGS/:DIALOG2'} className={onActive}>Goshan</NavLink></div>
                <div className={cl.item}><NavLink to={'/DIALOGS/:DIALOG3'} className={onActive}>Ivan</NavLink></div>
                <div className={cl.item}><NavLink to={'/DIALOGS/:DIALOG4'} className={onActive}>Dre</NavLink></div>
            </div>


            <div className={cl.messages}>
                <div className={cl.message}>Hi</div>
                <div className={cl.message}>Bro</div>
                <div className={cl.message}>How are you?</div>
            </div>
        </div>
    )
}