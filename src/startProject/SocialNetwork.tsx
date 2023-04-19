import React, {useEffect} from 'react';
import './SocialNetwork.css';
import {Header} from "../components/Header/Header";
import {useAppDispatch, useAppSelector} from "./store";
import {authThunks} from "../reducers/authReducer";
import {ContainerBlock} from "../components/Container/ContainerBlock";
import CircularProgress from "@mui/material/CircularProgress";
import {BrowserRouter, Navigate} from "react-router-dom";

export const SocialNetwork = () => {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector(state => state.auth.isInitialized)

    useEffect(() => {
        dispatch(authThunks.initializeApp())
    }, [])



    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }



    return <div className={'app-wrapper'}>
        <BrowserRouter>
            <Header/>
            <ContainerBlock/>
        </BrowserRouter>
    </div>
}

