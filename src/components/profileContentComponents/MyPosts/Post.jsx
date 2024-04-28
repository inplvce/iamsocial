import React from "react";
import classes from './Post.module.css';
import {useState} from "react";

// export type MyPostType ={
//     name: string
//     messagePost: string
// }

// const classes = {
//     'avaPosts' : 'avaPosts',
// }

export const Post = (props) => {

    const [count, setCount] = useState(0)

    const addLike = () => {
        setCount(count + 1)
    }


    return (
        <div className={classes.postContainer}>
            <img className={classes.avaPosts}
                 src={'https://cdn.fishki.net/upload/post/2016/07/28/2026065/tn/2f3228627f3c87813ef0712c0f5325ec.jpg'}
            />
            <a>{props.name} </a>
            <span className={classes.item}>{props.messagePost}</span>
            <button className={'like'}
                    onClick={addLike}>like {count}</button>
        </div>
    )
}