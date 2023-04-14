import {v1} from "uuid";

export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewPost: string
    profile: ProfileType
    status: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    userId: string,
    photos: PhotosType
}

type PhotosType = {
    small: string,
    large: string
}

type ContactsType = {
    facebook: null | string,
    github: null | string,
    mainLink: null | string,
    twitter: null | string,
    vk: null | string,
    website: null | string,
    youtube: null | string
}

export type PostType = {
    id: string,
    message: string,
    likesCount: number
}


let initialState: ProfilePageType = {
    messageForNewPost: '',
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: "It's my first post", likesCount: 11},
        {id: v1(), message: 'Blabla', likesCount: 11},
        {id: v1(), message: 'Dada', likesCount: 11}
    ],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            github: '',
            mainLink: null,
            twitter: '',
            vk: '',
            website: null,
            youtube: null
        },
        fullName: '',
        lookingForAJob: true,
        lookingForAJobDescription: '',
        photos: {
            small: '',
            large: ''
        },
        userId: '1'
    },
    status: 'Hello'
}



export const ProfileReducer = (state: ProfilePageType = initialState, action: any):ProfilePageType => {
    switch (action.type) {
        case'xxx': return {
           ...state
        }
        default: return state
    }
};

