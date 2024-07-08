import React from "react";
import './MyPosts.module.css'
import {Post} from "./Post";

let classes = {'myPosts': 'MyPorts_myPosts__6Q9c6'}

export const MyPosts = (props) => {
    let newPostElement = React.createRef()

    const addPost = () => {
        debugger;
        let text = newPostElement.current.value
        console.log(props.addPost(text))
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
            {props.state.profilePage.posts.map((p => {
                return (
                    <Post id={p.id} messagePost={p.messagePost} count={p.count} addPost={props.addPost}/>
                )

            }))}

        </div>
    </div>
}





