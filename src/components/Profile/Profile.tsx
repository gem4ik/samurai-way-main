import style from "./Profile.module.css"
import React, {ChangeEvent, FC} from "react";
import {ActionTypes, addCurrentPostTextAC, addPostAC, ProfileType} from "../Data/Store";
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    profile: ProfileType
    dispatch: (action: ActionTypes) => void
}
export const Profile: FC<ProfilePropsType> = (props) => {
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(e.currentTarget.value) {
            props.dispatch(addCurrentPostTextAC(e.currentTarget.value))
        }
    }
    return (
        <div>
            <ProfileInfo/>
            <div className={style.postContainer}>
                <div>My posts</div>
                <textarea
                    onChange={onChangeHandler}
                    className={style.textitem}
                    value={props.profile.newPostText}
                ></textarea>
                <button onClick={()=>{props.dispatch(addPostAC())}}
                        className={style.button}>add post</button>
            </div>

                <Posts profile={props.profile.posts}/>
        </div>
    )
}