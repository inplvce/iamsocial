import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import React, {useState} from "react";

const DialogItem = (props) => {

    const path = '/DIALOGS/' + props.id

    return <div className={cl.item}>
        <NavLink to={path} className={onActive}>{props.name}</NavLink></div>

}

const DialogMessage = (props) => {

    return <div className={cl.message} id={props.id}>{props.message}</div>
}

const onActive = ({isActive}) => isActive ? `${cl.active}` : ''

export const Dialogs = () => {

    const usersData = [
        {id: ':DIALOG1', name: 'Vatsok'},
        {id: ':DIALOG2', name: 'Goshan'},
        {id: ':DIALOG3', name: 'Ivan'},
        {id: ':DIALOG4', name: 'Dre Dr'},
    ]


    const messagesData = [
        {id: 1, message: 'Ho'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Hoo'},
        {id: 4, message: 'Hm'},
    ]

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {usersData.map((user)=> <DialogItem name={user.name} id={user.id}/>)}
            </div>

            <div className={cl.messages}>
                {messagesData.map((message)=> <DialogMessage id={message.id} message={message.message}/>)}

            </div>
        </div>
    )
}