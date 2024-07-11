import React from "react";
import { ProfileContentUser } from "./ProfileContentUser";
import './ProfileContent.css';
import { MyPosts } from "../MyPosts/MyPosts";
import { RootStateType } from "../../../redux/state";

interface ProfileContentProps {
    state: RootStateType;
}

export const ProfileContent: React.FC<ProfileContentProps> = (props) => {
    return (
        <div>
            <ProfileContentUser />
            <MyPosts posts={props.state.profilePage.posts}/>
        </div>
    );
};