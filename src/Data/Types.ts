import {addCurrentPostTextAC, addPostAC} from "./ProfileReducer";
import {addMessageAC, addMessageTextAC} from "./DialogsReducer";
import {followAC} from "./UsersReducer";

export type  ActionTypes =
    ReturnType<typeof addCurrentPostTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessageTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof followAC>

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
export type LocationType = {
    city: string;
    country: string;
};

export type FriendsType = {
    id: string;
    photoUrl: string;
    followed: boolean;
    fullName: string;
    status: string;
    location: LocationType;
};
export type UsersType = {
    users: FriendsType[]
}