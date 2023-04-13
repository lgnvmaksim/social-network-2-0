import React from 'react';
import './SocialNetwork.css';
import {Header} from "./components/Header/Header";
import {Body} from "./components/Body/Body";
import {HashRouter} from "react-router-dom";

export const SocialNetwork = () => {
    return <div className={'app-wrapper'}>
        <Header/>
        <HashRouter>
            <Body/>
        </HashRouter>

    </div>
}

