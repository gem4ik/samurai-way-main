import {ActionTypes, UserType} from "./Types";

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    pageCount: 1,
    followed: false,
    currentPage: 1
}


export type initialUsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    pageCount: number
    followed: boolean
    currentPage: number
}

export const UsersReducer = (state: initialUsersStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SET-USERS": {
            return {...state, users: [...action.payload.users]}
        }
        case "SET-USERS-TOTAL-COUNT":{
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        }
        case "SET-CURRENT-PAGE":{
            return {...state, currentPage: action.payload.currentPage}
        }
        default:
            return state
    }
};
export const followAC = (value: boolean, id: number) => {
    return {
        type: "SWITCH-FOLLOW",
        payload: {value, id}
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        payload: {users}
    } as const
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