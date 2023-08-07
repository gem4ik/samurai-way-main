import {addMessageAC, addMessageTextAC} from "./DialogsReducer";
import {followAC, setCurrentPageAC, setIsLoading, setUsersAC, setUsersTotalCountAC} from "./UsersReducer";
import {addCurrentPostText, addPost, setUserProfile} from "./ProfileReducer";

export type  ActionTypes =
    ReturnType<typeof addCurrentPostText>
    | ReturnType<typeof addPost>
    | ReturnType<typeof addMessageTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setUsersTotalCountAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setUserProfile>

export type Poststype = {
    id: string
    post: string
    likeValue: number
}
export type ProfileType = {
    posts: Poststype[]
    newPostText: string
    profile: null|UserProfileType
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

type ContactsType = {
    "facebook": null | string
    "website": null | string
    "vk": null | string
    "twitter": null | string
    "instagram": null | string
    "youtube": null | string
    "github": null | string
    "mainLink": null | string
}
export type UserProfileType = {
    "aboutMe": string
    "contacts": ContactsType
    "lookingForAJob": boolean
    "lookingForAJobDescription": string
    "fullName": string
    "userId": number
    "photos": photosType
}
export type AuthUserDataType = {
    id: number
    email:string
    login: string
}
export type AuthDataType = {
    resultCode: number
    messages: string[]
    data: AuthUserDataType
}