import {RootStateType} from "../redux";
import {createSelector} from "reselect";

const getUsersSelector = (state: RootStateType) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(()=>true)
})
export const getPageSize = (state: RootStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: RootStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage
}
export const getIsLoading = (state: RootStateType) => {
    return state.usersPage.isLoading
}
export const getIsAuth = (state: RootStateType) => {
    return state.auth.isAuth
}
export const getLogin = (state: RootStateType) => {
    return state.auth.login
}
