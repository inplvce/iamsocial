import React from "react";
import {ProfileContentUser} from "./ProfileContentUser";
import './ProfileContent.css'
import {MyPosts} from "../MyPosts/MyPosts";



export const ProfileContent = (props) => {
debugger;
    return <div>
        <ProfileContentUser/>
        <MyPosts posts={props.posts}/>
        {/*<MyPosts posts={state.profilePage.posts}/>*/}

    </div>
}