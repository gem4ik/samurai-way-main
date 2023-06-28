import {addCurrentPostTextAC, addPostAC} from "./ProfileReducer";
import {addMessageAC, addMessageTextAC} from "./DialogsReducer";

export type  ActionTypes =
    ReturnType<typeof addCurrentPostTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessageTextAC>
    | ReturnType<typeof addMessageAC>

export type Poststype = {
    id: string
    post: string
    likeValue: number
}
export type ProfileType = {
    posts: Poststype[]
    newPostText: string
}
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type MessageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type StateType = {
    Profile: ProfileType
    Message: MessageType
}
export type StoreType = {
    _State: StateType
    renderTree: () => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}