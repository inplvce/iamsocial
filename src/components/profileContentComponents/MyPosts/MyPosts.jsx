import React from "react";
import './MyPosts.module.css'
import {Post} from "./Post";

let classes = {'myPosts': 'MyPorts_myPosts__6Q9c6'}

export const MyPosts = (props) => {


    const posts = [
        {name: 'Oldos', messagePost: 'Hi! Like my post!', count: 1},
        {name: 'Ariel', messagePost: 'Like my post!', count: 15},
        {name: 'Inga', messagePost: 'Hi! Like my!', count: 22},
        {name: 'Mara', messagePost: 'Like!', count: 2},
    ]


    return <div className={classes.myPosts}>
        <div>
            <textarea className={'inputTextarea'}/>
        </div>
        <div>
            <button>Add Post</button>
        </div>
        <div className={classes.item}>
            <h3>My posts</h3>

            {posts.map((p => {
                return (
                    <Post name={p.name} messagePost={p.messagePost} count={p.count}/>
                )

            }))}

        </div>
    </div>
}

