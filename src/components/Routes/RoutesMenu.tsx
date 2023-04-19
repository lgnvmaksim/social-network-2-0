import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Error404} from "../Error404/Error404";
import {Profile} from "../Profile/Profile";
import {MainBlock} from "../MainBlock/MainBlock";
import {Dialogs} from "../Dialogs/Dialogs";
import {Login} from "../Login/Login";

export const RoutesMenu = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainBlock/>}/>
                <Route path={'profile'} element={<Profile/>}/>
                <Route path={'dialogs'} element={<Dialogs/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'404'} element={<Error404/>}/>
                <Route path={'*'} element={<Navigate to={'404'}/>}/>
            </Routes>
        </div>
    );
};