import React from 'react';
import './SocialNetwork.css';
import {RoutesComponent} from "./components/Routes/RoutesComponent";
import {Header} from "./components/Header/Header";

export const SocialNetwork = () => {
    return <div className={'app-wrapper'}>
        <Header/>
        <RoutesComponent/>
    </div>
}

