import React, {useState} from "react";
import classes from './Post.module.css';
import state, {PostType} from "../../../redux/state";


export const Post = (props: PostType) => {
    // eslint-disable-next-line no-undef
    const [post, setPost] = useState(state.profilePage.posts)
    const [count, setCount] = useState(props.count)

    const likesCounter = () => {
        setCount(count + 1)
    }

    return (
        <div className={classes.postContainer}>
            <img className={classes.avaPosts}
                 src={'https://cdn.fishki.net/upload/post/2016/07/28/2026065/tn/2f3228627f3c87813ef0712c0f5325ec.jpg'}
            />
            <div className={classes.item}>{props.messagePost}</div>
            <button className={'like'} onClick={likesCounter}>{props.count}</button>
            <button onClick={()=>{}}>{'remove post'}</button>
        </div>
    )
}