import {Dispatch} from "redux";
import {AuthAPI} from "../api/api";
import {ThunkType} from "./redux";
import {ActionTypes} from "./Types";

export type InitialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
export const AuthReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA' : {
            return {...action.payload, isAuth: true}
        }
        case 'ME-LOGIN' : {
            return {...state, ...action.payload, isAuth: true}
        }
        case "ME-LOGOUT": {
            return {...state, ...action.payload, isAuth: false}
        }
        default:
            return state
    }
}
export const setAuthUserDataAC = (userId: number | null, email: string | null, login: string | null) => {
    return {
        type: 'SET-USER-DATA',
        payload: {userId, email, login}
    } as const
}
export const setAuthUserDataTC = (): ThunkType => {
    return (dispatch: Dispatch) => {
        AuthAPI.setAuthUserData()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(res.data.data.id, res.data.data.email, res.data.data.login))
                }
            })
    }
}
export const MeLoginAC = (email: string | null, password: string | null, rememberMe: boolean | null = false) => {

    return {
        type: 'ME-LOGIN',
        payload: {email, password, rememberMe}
    } as const
}
export const MeLoginTC = (email: string | null, password: string | null, rememberMe: boolean | null): ThunkType => {
    return (dispatch: Dispatch) => {
        AuthAPI.meLogin({email, password, rememberMe})
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(MeLoginAC(email, password, rememberMe))
                }
            })
    }
}
export const MeLogoutAC = (email: string | null, password: string | null, rememberMe: boolean | null = false) => {
    return {
        type: 'ME-LOGOUT',
        payload: {email, password, rememberMe}
    } as const
}
export const MeLogoutTC = (): ThunkType => {
    return (dispatch: Dispatch) => {
        AuthAPI.meLogout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(MeLogoutAC(null, null, null))
                }
            })
    }
}