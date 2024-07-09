import React from "react";
import {ProfileContentUser} from "./ProfileContentUser";
import './ProfileContent.css'
import {MyPosts} from "../MyPosts/MyPosts";
import {PostType, ProfilePageType} from "../../../redux/state";



export const ProfileContent = (props: ProfilePageType) => {

    return <div>
        <ProfileContentUser/>
        <MyPosts posts={props.posts} />
        {/*<MyPosts posts={props.state.profilePage.posts}/>*/}

    </div>
}