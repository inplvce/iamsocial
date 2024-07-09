import React, {useRef} from "react";
import './MyPosts.module.css'
import {Post} from "./Post";
import {PostType, ProfilePageType} from "../../../redux/state";


let classes = { 'myPosts': 'MyPorts_myPosts__6Q9c6', 'item': 'MyPorts_item__6Q9c6' }

export const MyPosts = (props: ProfilePageType) => {
    // let newPostElement = React.createRef()

    let newPostElement = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        if (newPostElement.current) {
            // Доступ к текущему значению рефа
            console.log(newPostElement.current.value);
        }
    }

    return <div className={classes.myPosts}>
        <div>
            <textarea ref={newPostElement} className={'inputTextarea'} onChange={()=>{}} />
        </div>
        <div>
            <button onClick={addPost}>Add Post</button>
        </div>
        <div className={classes.item}>
            <h3>My posts</h3>
            {props.posts.map((p => {
                return (
                    <Post id={p.id} messagePost={p.messagePost} count={p.count}/>
                )
            }))}

        </div>
    </div>
}





