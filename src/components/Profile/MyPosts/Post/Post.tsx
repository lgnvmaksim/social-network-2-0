import React from 'react';
import {PostType} from "../../../../reducers/profile-reducer";

type PropsType =  PostType

export const Post = ({id, message, likesCount}:PropsType) => {
    return (
        <div>
            <img src="https://stickershop.line-scdn.net/stickershop/v1/product/8141837/LINEStorePC/main.png"
                 alt="avatar"/>
            {message}
            <div>
                <span>like: {likesCount}</span>
            </div>
        </div>
    );
};
