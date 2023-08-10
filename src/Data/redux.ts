import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionTypes} from "./Types";

const reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
})

export type RootStateType = ReturnType<typeof store.getState>

export const store = createStore(reducers, applyMiddleware(thunk))

export type AppDispatch = ThunkDispatch<RootStateType, unknown, ActionTypes>

// export type AppDispatch = typeof store.dispatch

export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, ActionTypes>