import {addCurrentPostTextAC, addPostAC} from "./ProfileReducer";
import {addMessageAC, addMessageTextAC} from "./DialogsReducer";
import {followAC, setUsersAC} from "./UsersReducer";

export type  ActionTypes =
    ReturnType<typeof addCurrentPostTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessageTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof setUsersAC>

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


export type photosType = {
    "small": null | string,
    "large": null | string
}
export type UserType = {
    "name": string
    "id": number
    "uniqueUrlName": null | any
    "photos": photosType
    "status": null | any,
    "followed": boolean
};

export type UsersType = {
    items: UserType[],
    totalCount: number
    error: null | string
}

