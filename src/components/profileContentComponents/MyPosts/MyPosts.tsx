import React, { useRef, useState } from "react";
import './MyPosts.module.css';
import { Post } from "./Post";
import { PostType } from "../../../redux/state";

const classes = { 'myPosts': 'MyPorts_myPosts__6Q9c6', 'item': 'MyPorts_item__6Q9c6' };

export interface MyPostsProps {
    posts: PostType[];
    removePost: (id: string) => void;
}

export const MyPosts: React.FC<MyPostsProps> = (props) => {
    const [myPosts, setMyPosts] = useState<PostType[]>(props.posts);

    const removePost = (id: string) => {
        setMyPosts(myPosts.filter(post => post.id !== id));
        props.removePost(id);
    };

    const newPostElement = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        if (newPostElement.current) {
            console.log(newPostElement.current.value);
        }
    };

    return (
        <div className={classes.myPosts}>
            <div>
                <textarea ref={newPostElement} className={'inputTextarea'} />
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={classes.item}>
                <h3>My posts</h3>
                {myPosts.map(post => (
                    <Post key={post.id} id={post.id} messagePost={post.messagePost} count={post.count} removePost={removePost} />
                ))}
            </div>
        </div>
    );
};