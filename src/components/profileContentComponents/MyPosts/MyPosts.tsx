import React, {ChangeEvent, useRef, useState} from "react";
import './MyPosts.module.css';
import {Post} from "./Post";
import {PostType} from "../../../redux/state";
import {v1} from "uuid";
import {isDisabled} from "@testing-library/user-event/dist/utils";

const classes = {'myPosts': 'MyPorts_myPosts__6Q9c6', 'item': 'MyPorts_item__6Q9c6'};

export interface MyPostsProps {
    posts: PostType[];
    removePost: (id: string) => void;
}

export const MyPosts: React.FC<MyPostsProps> = (props) => {

    const [myMessage, setMyMessage] = useState("");
    const [myPosts, setMyPosts] = useState<PostType[]>(props.posts);
    const [error, setError] = useState("Введите текст!!");

    const removePost = (id: string) => {
        setMyPosts(myPosts.filter(post => post.id !== id));
        props.removePost(id);
    };

    // const newPostElement = useRef<HTMLTextAreaElement>(null);

    const onChangePostMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMyMessage(event.currentTarget.value.trim())
    }


    const addPost = () => {
        const newPost = {id: v1(), messagePost: myMessage, count: 0}
        if (myMessage.length < 1) {
        return alert(error)
        }
        setMyPosts([newPost, ...myPosts])
        setMyMessage('')

    };


    return (
        <div className={classes.myPosts}>
            <div>
                <textarea value={myMessage} onChange={onChangePostMessage} className={'inputTextarea'}/>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={classes.item}>
                <h3>My posts</h3>
                {myPosts.map(post => (
                    <Post key={post.id} id={post.id} messagePost={post.messagePost} count={post.count}
                          removePost={removePost}/>
                ))}
            </div>
        </div>
    );
};