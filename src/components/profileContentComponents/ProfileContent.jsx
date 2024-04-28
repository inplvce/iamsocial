import React from "react";
import {ProfileContentImage} from "./ProfileContentImage";
import {ProfilePhoto} from "./ProfilePhoto";
import {ProfileData} from "./ProfileData";
import './ProfileContent.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const ProfileContent = () => {
    return <div>
        <ProfileContentImage/>
        <ProfilePhoto/>
        <ProfileData/>
        <MyPosts/>

    </div>
}