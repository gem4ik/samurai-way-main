import React, {ChangeEvent, FC} from "react";
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfileType} from "../../Data/Types";
import {addCurrentPostTextAC, addPostAC} from "../../Data/ProfileReducer";
import {AddPostField} from "./AddPostField/AddPostField";

type ProfilePropsType = {
    profile: ProfileType
    dispatch: (action: ActionTypes) => void
}
export const ProfileContainer: FC<ProfilePropsType> = (props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            props.dispatch(addCurrentPostTextAC(e.currentTarget.value))
        }
    }

    const onClickHandler = () => {
        props.dispatch(addPostAC())
    }

    return (
        <div>
            <ProfileInfo/>
            <AddPostField
                onClickHandler={onClickHandler}
                onChangeHandler={onChangeHandler}
                newPostText={props.profile.newPostText}
            />
            <Posts posts={props.profile.posts}/>
        </div>
    )
}