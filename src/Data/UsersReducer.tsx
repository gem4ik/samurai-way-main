import {ActionTypes, UserType} from "./Types";
import {UsersAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkType} from "./redux";

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    pageCount: 1,
    followed: false,
    currentPage: 1,
    isLoading: false,
}
export type initialUsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    pageCount: number
    followed: boolean
    currentPage: number
    isLoading: boolean
}

export const UsersReducer = (state: initialUsersStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SET-USERS": {
            return {...state, users: [...action.payload.users]}
        }
        case "SET-USERS-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.payload.currentPage}
        }
        case "SET-IS-LOADING": {
            return {...state, isLoading: action.payload.isLoading}
        }
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.id ? {...u, followed: true} : u)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.id ? {...u, followed: false} : u)
            }
        }
        default:
            return state
    }
};


export const followAC = (id: number) => {
    return {
        type: "FOLLOW",
        payload: {id}
    } as const
}
export const setFollowTC = (userID: number): any => {
    return (dispatch: Dispatch)=>{
        dispatch(setIsLoadingAC(true))
        UsersAPI.follow(userID)
            .then(() => {
                dispatch(followAC(userID))
            })
        dispatch(setIsLoadingAC(false))
    }
}

export const unfollowAC = (id: number) => {
    return {
        type: "UNFOLLOW",
        payload: {id}
    } as const
}
export const setUnfollowTC = (userID: number): any => {
    return (dispatch: Dispatch)=>{
        dispatch(setIsLoadingAC(true))
        UsersAPI.unfollow(userID)
            .then(() => {
                dispatch(unfollowAC(userID))
            })
        dispatch(setIsLoadingAC(false))
    }
}

export const setUsersTotalCountAC = (totalUsersCount: number) => {
    return {
        type: "SET-USERS-TOTAL-COUNT",
        payload: {totalUsersCount}
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        payload: {currentPage}
    } as const
}
export const setIsLoadingAC = (isLoading: boolean) => {
    return {
        type: "SET-IS-LOADING",
        payload: {isLoading}
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        payload: {users}
    } as const
}
export const setUsersTC = (pageSize:number, currentPage:number): ThunkType => {
    return (dispatch) =>{
        dispatch(setIsLoadingAC(true))
        UsersAPI.getUsers(pageSize, currentPage)
            .then(data => {
                dispatch(setUsersAC(data.items))
                dispatch(setUsersTotalCountAC(data.totalCount))
                dispatch(setIsLoadingAC(false))
            })
    }
}

