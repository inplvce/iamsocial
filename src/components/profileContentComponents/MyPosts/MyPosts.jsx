import React from "react";
import './MyPosts.module.css'
import {Post} from "./Post";

let classes = {'myPosts': 'MyPorts_myPosts__6Q9c6'}

export const MyPosts = (props) => {

    const addPost = props.posts
    // const [post, setPost] = useState(addPost)
    // const [name, setName] = useState('')


    return <div className={classes.myPosts}>
        <div>
            <textarea className={'inputTextarea'}/>
        </div>
        <div>
            <button>Add Post</button>
        </div>
        <div className={classes.item}>
            <h3>My posts</h3>

            {addPost.map((p => {

                return (
                    <Post name={p.name} messagePost={p.messagePost} count={p.count} key={p.id}/>
                )

            }))}

        </div>
    </div>
}

