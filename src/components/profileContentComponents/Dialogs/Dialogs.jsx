import cl from './Dialogs.module.css';
import React from "react";
import {DialogItem} from "./Dialog";
import {Message} from "./Message/Message";



export const Dialogs = (props) => {


    const users = props.usersData.map((user) => <DialogItem name={user.name} id={user.id}/>)
    const messages = props.messagesData.map((message) => <Message id={message.id} message={message.message}/>)

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {users}
            </div>

            <div className={cl.messages}>
                {messages}
            </div>
        </div>
    )
}