import React from "react";
import {ProfileContentUser} from "./ProfileContentUser";
import './ProfileContent.css'
import {MyPosts} from "../MyPosts/MyPosts";



export const ProfileContent = (props) => {
    return <div>
        <ProfileContentUser addPost={props.addPost}/>
        <MyPosts posts={props.posts} addPost={props.addPost}/>
        {/*<MyPosts posts={props.state.profilePage.posts}/>*/}

    </div>
}