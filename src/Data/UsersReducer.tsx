import {ActionTypes, UserType} from "./Types";

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
                users: state.users.map(u => u.id === action.payload.id ? {...u, followed: true} : u)
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
export const unfollowAC = (id: number) => {
    return {
        type: "UNFOLLOW",
        payload: {id}
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
export const setIsLoading = (isLoading: boolean) => {
    return {
        type: "SET-IS-LOADING",
        payload: {isLoading}
    } as const
}