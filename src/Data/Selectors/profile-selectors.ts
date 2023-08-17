import {RootStateType} from "../redux";

export const getProfilePage = (state: RootStateType) => {
    return state.profilePage
}
export const getStatus = (state: RootStateType) => {
    return state.profilePage.status
}
