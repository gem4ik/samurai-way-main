import {addMessageAC, addMessageTextAC} from "./DialogsReducer";
import {followAC, setCurrentPageAC, setIsLoadingAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "./UsersReducer";
import {addCurrentPostText, addPost, getStatusAC, setStatusAC, setUserProfileAC} from "./ProfileReducer";
import {MeLoginAC, MeLogoutAC, setAuthUserDataAC, setInitializedAC} from "./AuthReducer";

export type  ActionTypes =
    ReturnType<typeof addCurrentPostText>
    | ReturnType<typeof addPost>
    | ReturnType<typeof addMessageTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setUsersTotalCountAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setIsLoadingAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof getStatusAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof MeLoginAC>
    | ReturnType<typeof MeLogoutAC>
    | ReturnType<typeof setInitializedAC>

export type Poststype = {
    id: string
    post: string
    likeValue: number
}
export type ProfileType = {
    posts: Poststype[]
    newPostText: string
    profile: null | UserProfileType
    status: string
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
    email: string
    login: string
}
export type AuthDataType = {
    resultCode: number
    messages: string[]
    data: AuthUserDataType
}
export type UserType = {
    "name": string
    "id": number
    "uniqueUrlName": null | any
    "photos": photosType
    "status": null | any,
    "followed": boolean
};

export type GetUserResponceType = {
    items: UserType[]
    totalCount: number
    error: null | string
}
export type FollowPostResponceType = {
    resultCode: number
    messages: string[]
    data: {}
}
export type SetStatusResponceType<D = {}> = {
    data: D
    fieldsError: string[]
    messages: string[]
    resultCode: number
}
export type LoginRequestType = {
    email: string | null
    password: string | null
    rememberMe?: boolean | null
    captcha?: boolean
}
export type LoginResponceType = {
    resultCode: number
    messages: string[]
    data: {
        userId: number
    }
}