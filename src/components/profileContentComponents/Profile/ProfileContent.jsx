import React from "react";
import {ProfileContentUser} from "./ProfileContentUser";
import './ProfileContent.css'
import {MyPosts} from "../MyPosts/MyPosts";

export const ProfileContent = () => {

    return <div>
        <ProfileContentUser/>
        <MyPosts/>

    </div>
}