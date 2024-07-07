import React, {useState} from "react";
import './MyPosts.module.css'
import {Post} from "./Post";
import state from "../../../redux/state";
import {v1} from "uuid";

let classes = {'myPosts': 'MyPorts_myPosts__6Q9c6'}

export const MyPosts = (props) => {

    let newPostElement = React.createRef()



    const addPost = () => {
        let text = newPostElement.current.value
        alert(text)
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

            {state.profilePage.posts.map((p => {

                return (
                    <Post name={p.name} messagePost={p.messagePost} count={p.count} key={p.id}/>
                )

            }))}

        </div>
    </div>
}





