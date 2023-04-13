import React from 'react';
import avatar from 'assets/avatar.jpg'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import s from './ProfileInfo.module.css'



export const ProfileInfo = () => {
    return <div className={s.wrapper}>
        <img src={avatar} alt="user-photo"   className={s.mainPhoto}/>
        <ProfileStatus/>
    </div>

}