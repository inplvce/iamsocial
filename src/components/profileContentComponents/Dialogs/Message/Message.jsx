import cl from './Message.module.css';
import React from "react";


export const Message = (props) => {

    return <div className={cl.message} id={props.id}>{props.message}</div>
}



