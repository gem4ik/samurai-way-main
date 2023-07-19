import {ActionTypes, FriendsType, UsersType} from "./Types";

let initialState = {
    users: [] as unknown as FriendsType[],
    pageSize: 2,
    totalUsersCount: 0,
    pageCount: 1,
    followed: false,
}

    export const UsersReducer = (state: UsersType = initialState, action: ActionTypes) => {
    debugger
        switch (action.type) {
            case "SET-USERS": {
                return {...action.payload}
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
    export const setUsersAC = (users: UsersType) => {
        return {
            type: "SET-USERS",
            payload: {users}
        } as const
    }