import {ActionTypes, UserType} from "./Types";

let initialState = {
    users: [],
    pageSize: 2,
    totalUsersCount: 0,
    pageCount: 1,
    followed: false,
}


export type initialUsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    pageCount: number
    followed: boolean
}

export const UsersReducer = (state: initialUsersStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SET-USERS": {
            return {...state, users: [...action.payload.users]}
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