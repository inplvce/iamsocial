import React from "react";
import './MyPosts.module.css'
import {Post} from "./Post";




let classes = {
    'myPosts': 'MyPorts_myPosts__6Q9c6',
}



export const MyPosts = () => {
    return <div className={classes.myPosts}>
        <div>
            <textarea className={'inputTextarea'}/>
        </div>
        <div>
            <button>Submit</button>
        </div>
        <div className={classes.item}>
            <h3>My posts</h3>
            <Post name={'Oldos'} messagePost='Hi! Like my post!'/>
            <Post name={'Ignat'} messagePost='Hi!'/>
            <Post name={'Ariel'} messagePost='Like my post!'/>
            <Post name={'Mara'} messagePost='Like!'/>
            <Post name={'Game'} messagePost='Like!'/>
            <Post name={'Inga'} messagePost='Like!!'/>
        </div>
    </div>
}

