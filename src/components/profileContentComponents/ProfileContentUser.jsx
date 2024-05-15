import React from "react";
import {ProfilePhoto} from "./ProfilePhoto";
import {ProfileData} from "./ProfileData";

export const ProfileContentUser = () => {
    return <div>
        <img className={'content-img'}
             src={'https://cdn.pixabay.com/photo/2016/11/14/03/29/grand-palace-1822487_1280.jpg'}/>
        <ProfilePhoto/>
        <ProfileData firstName={'Uladzimir'} lastName={'Yo!'} />
    </div>


}