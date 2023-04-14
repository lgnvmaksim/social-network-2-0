import React from 'react';
import {AddPostForm} from "./AddPostForm/AddPostForm";
import {Post} from "./Post/Post";

export const MyPosts = () => {


    return <div>
        <h2>My posts</h2>
        <AddPostForm/>
        <Post id={'1'} message={'Hello'} likesCount={3}/>

    </div>
}