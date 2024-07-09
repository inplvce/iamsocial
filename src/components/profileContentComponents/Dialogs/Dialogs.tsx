import cl from './Dialogs.module.css';
import React from "react";
import state, {DialogPageType} from "../../../redux/state";



export const Dialogs: React.FC<DialogPageType> = () => {
    // const users = props.usersData.map((user) => <DialogItem name={user.name} id={user.id}/>)
    // const messages = props.messagesData.map((message) => <Message id={message.id} message={message.message}/>)


    // let newMessageElement = React.createRef()


    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
            </div>
            <div className={cl.messages}>
                <textarea className={'inputTextarea'}/>
                <div><button onClick={()=>{}}>Send</button></div>
            </div>
        </div>
    )
}