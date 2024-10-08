import React, {useState} from "react";
import classes from './Post.module.css';
import defaultState from "../../../redux/defaultState";

interface PostProps {
    id: string;
    messagePost: string;
    count: number;
    removePost: (id: string) => void;
}


export const Post = (props: PostProps) => {
    // eslint-disable-next-line no-undef
    const [post, setPost] = useState(defaultState.profilePage.posts)
    const [count, setCount] = useState(props.count)

    const callBackCounterHandler = () => {
        setCount(props.count + 1)
    }

    return (
        <div className={classes.postContainer}>
            <img className={classes.avaPosts}
                 src={'https://cdn.fishki.net/upload/post/2016/07/28/2026065/tn/2f3228627f3c87813ef0712c0f5325ec.jpg'}
            />
            <div className={classes.item}>{props.messagePost}</div>
            <button className={'like'} onClick={callBackCounterHandler}>{props.count}</button>
            <button onClick={()=>props.removePost(props.id)}>{'remove post'}</button>
        </div>
    )
}