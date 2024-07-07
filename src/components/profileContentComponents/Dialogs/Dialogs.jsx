import cl from './Dialogs.module.css';
import React from "react";
import {DialogItem} from "./Dialog";
import {Message} from "./Message/Message";
import state from "../../../redux/state";



export const Dialogs = (props) => {
    // const users = props.usersData.map((user) => <DialogItem name={user.name} id={user.id}/>)
    // const messages = props.messagesData.map((message) => <Message id={message.id} message={message.message}/>)

    const users = state.dialogsPage.usersData.map((user) => <DialogItem name={user.name} id={user.id}/>)
    const messages = state.dialogsPage.messagesData.map((message) => <Message id={message.id} message={message.message}/>)

    let newMessageElement = React.createRef()

    const sendNewMessage = () => {
        let text = newMessageElement.current.value
        alert(text)
    }

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {users}
            </div>
            <div className={cl.messages}>
                {messages}
                <textarea className={'inputTextarea'} ref={newMessageElement}/>
                <div><button onClick={sendNewMessage}>Send</button></div>
            </div>
        </div>
    )
}