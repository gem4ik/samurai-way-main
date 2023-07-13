import {v1} from "uuid";
import {ActionTypes, ProfileType} from "./Types";

const InitialProfile = {
    posts: [
        {id: v1(), post: 'Hello, World', likeValue: 8},
        {id: v1(), post: "It's my first post", likeValue: 4},
        {id: v1(), post: "It's my first post", likeValue: 7}
    ],
    newPostText: ''
}

export const ProfileReducer = (state: ProfileType=InitialProfile, action: ActionTypes):ProfileType => {
    switch (action.type) {
        case 'ADD-CURRENT-POST-TEXT' : {
            return {...state, newPostText: action.payload.newPostText}
        }
        case 'ADD-POST' : {
            if (state.newPostText !== '') {
                let newPost = {id: v1(), post: state.newPostText, likeValue: 0}
                let newState = {...state, posts: [newPost, ...state.posts]}
                state.newPostText = ''
                return newState
            }
            return state
        }
        default: return state
    }
}

export const addCurrentPostTextAC = (newPostText: string) => {
    return {
        type: 'ADD-CURRENT-POST-TEXT',
        payload: {newPostText}
    } as const
}
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}