import cl from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import classes from "../MyPosts/Post.module.css";


type DialogItemType = {
    id: string
    name: string
}

export const DialogItem = (props: DialogItemType) => {
    const path = '/DIALOGS/' + props.id

    return <div className={cl.itemDialog}>
        <img className={classes.avaPostsDialog}
             src={'https://cdn.fishki.net/upload/post/2016/07/28/2026065/tn/2f3228627f3c87813ef0712c0f5325ec.jpg'}
        />

        <NavLink to={path} className={onActive}>{props.name}
        </NavLink>

    </div>

}



const onActive = ({isActive} : {isActive: boolean}) =>  isActive ? `${cl.active}` : ''

