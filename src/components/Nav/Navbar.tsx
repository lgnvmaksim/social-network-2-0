import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    const style = (isActive: boolean) => {
        return isActive ? s.nav_active : s.navLink
    }


    return <nav className={s.nav}>
        <div>
            <NavLink to='/profile' className={({isActive}) => style(isActive)}>Profile</NavLink>
        </div>
        <div>
            <NavLink to='/dialogs' className={({isActive}) => style(isActive)}>Messages</NavLink>
        </div>
        {/*<div>*/}
        {/*    <NavLink to='/users' className={({isActive}) => style(isActive)}>Users</NavLink>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <NavLink to='/news' className={({isActive}) => style(isActive)}>News</NavLink>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <NavLink to='/music' className={({isActive}) => style(isActive)}>Music</NavLink>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <NavLink to='/settings' className={({isActive}) => style(isActive)}>Settings</NavLink>*/}
        {/*</div>*/}
    </nav>

}