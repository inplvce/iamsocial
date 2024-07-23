import cl from './Message.module.css';
import React from "react";
import {MessageType} from "../../../../redux/defaultState";



export const Message = (props: MessageType) => {

    return <div className={cl.message} key={props.id}>{props.message}</div>
}



