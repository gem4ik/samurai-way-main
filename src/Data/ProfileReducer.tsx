import {v1} from "uuid";
import {ActionTypes, ProfileType, UserProfileType} from "./Types";
import {Dispatch} from "redux";
import {ProfileAPI} from "../api/api";
import {setIsLoadingAC} from "./UsersReducer";
import {ThunkType} from "./redux";

const InitialProfile = {
    posts: [
        {id: v1(), post: 'Hello, World', likeValue: 8},
        {id: v1(), post: "It's my first post", likeValue: 4},
        {id: v1(), post: "It's my first post", likeValue: 7}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

export const ProfileReducer = (state: ProfileType = InitialProfile, action: ActionTypes): ProfileType => {
    switch (action.type) {
        case 'ADD-CURRENT-POST-TEXT' : {
            return {...state, newPostText: action.payload.newPostText}
        }
        case 'GET-STATUS' : {
            return {...state, status: action.payload.status}
        }
        case 'SET-STATUS' : {
            return {...state, status: action.payload.status}
        }
        case 'ADD-POST' : {
            if (state.newPostText !== '') {
                let newPost = {id: v1(), post: state.newPostText, likeValue: 0}
                return {...state, posts: [newPost, ...state.posts], newPostText: ''}
            }
            return state
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: {...action.payload.userProfile}}
        }
        default:
            return state
    }
}

export const addCurrentPostText = (newPostText: string) => {
    return {
        type: 'ADD-CURRENT-POST-TEXT',
        payload: {newPostText}
    } as const
}
export const getStatusAC = (status: string) => {
    return {
        type: 'GET-STATUS',
        payload: {status}
    } as const
}
export const addPost = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const getStatusTC = (userId: string): ThunkType => {
    return (dispatch: Dispatch) => {
        dispatch(setIsLoadingAC(true))
        ProfileAPI.getStatus(userId)
            .then(res => {
                dispatch(getStatusAC(res.data))
                dispatch(setIsLoadingAC(false))
            })
    }
}
export const setStatusAC = (status: string) => {
    return {
        type: 'SET-STATUS',
        payload: {status}
    }as const
}
export const setStatusTC = (status: string): ThunkType => {
    return (dispatch: Dispatch) => {
        dispatch(setIsLoadingAC(true))
        ProfileAPI.setStatus(status)
            .then(res => {
                console.log(res)
                if (res.data.resultCode === 0){
                    dispatch(setStatusAC(status))
                }
            })
            .finally(()=>{dispatch(setIsLoadingAC(false))})
    }
}
export const setUserProfileAC = (userProfile: UserProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: {userProfile}
    } as const
}
export const setUserProfileTC = (userId: string): ThunkType => {
    return (dispatch: Dispatch) => {
        dispatch(setIsLoadingAC(true))
        ProfileAPI.setUsers(userId)
            .then(res => {
                dispatch(setUserProfileAC(res.data))
                dispatch(setIsLoadingAC(false))
            })
    }
}