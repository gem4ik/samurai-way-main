
export type InitialStateType = {
    userId: null|number
    email: null|string
    login: null|string
    isAuth: boolean
}
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
export type AuthReducerActionType = ReturnType<typeof setAuthUserDataAC>
export const AuthReducer = (state:InitialStateType = initialState, action: AuthReducerActionType):InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA' :{
            return {...action.payload, isAuth:true}
        }
        default: return state
    }
}
export const setAuthUserDataAC = (userId: number|null, email:string|null, login:string|null) => {
    return {
        type: 'SET-USER-DATA',
        payload: {userId, email, login}
    }as const
}