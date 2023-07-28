import {v1} from "uuid";
import {ActionTypes, ProfileType, UserProfileType} from "./Types";

const InitialProfile = {
    posts: [
        {id: v1(), post: 'Hello, World', likeValue: 8},
        {id: v1(), post: "It's my first post", likeValue: 4},
        {id: v1(), post: "It's my first post", likeValue: 7}
    ],
    newPostText: '',
    profile: null
}

export const ProfileReducer = (state: ProfileType=InitialProfile, action: ActionTypes):ProfileType => {
    switch (action.type) {
        case 'ADD-CURRENT-POST-TEXT' : {
            return {...state, newPostText: action.payload.newPostText}
        }
        case 'ADD-POST' : {
            if (state.newPostText !== '') {
                let newPost = {id: v1(), post: state.newPostText, likeValue: 0}
                return {...state, posts: [newPost, ...state.posts], newPostText: ''}
            }
            return state
        }
        case 'SET-USER-PROFILE': {
            debugger
            return {...state, profile: {...action.payload.userProfile}}
        }
        default: return state
    }
}

export const addCurrentPostText = (newPostText: string) => {
    return {
        type: 'ADD-CURRENT-POST-TEXT',
        payload: {newPostText}
    } as const
}
export const addPost = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const setUserProfile = (userProfile: UserProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: {userProfile}
    } as const
}