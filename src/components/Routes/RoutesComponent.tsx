import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Body} from "../Body/Body";
import {Error404} from "../Error404/Error404";
import {Profile} from "../Profile/Profile";

export const RoutesComponent = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Body/>}/>
                <Route path={'profile'} element={<Profile/>}/>
                <Route path={'404'} element={<Error404/>}/>
                <Route path={'*'} element={<Navigate to={'404'}/>}/>

            </Routes>
        </div>
    );
};