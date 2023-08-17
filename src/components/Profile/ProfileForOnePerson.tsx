import React from 'react';
import {AddPostField} from "./AddPostField/AddPostField";
import {Posts} from "./Posts/Posts";
import {ProfilePropsType} from "./ProfileContainer";
import {EditableSpan} from "../common/EditableSpan/EditableSpan";

export const ProfileForOnePerson = (props: ProfilePropsType) => {

    return (
        <div>
            <div>
                {props.profile.profile?.fullName}
                {props.profile.profile?.aboutMe}
                {props.profile.profile?.contacts.facebook}
                {props.profile.profile?.lookingForAJob}
                <div>
                    <img alt="userphoto" src={`${props.profile.profile?.photos.large}`}/>
                </div>
                {props.profile.profile?.lookingForAJobDescription}
            </div>
            {props.status
                ?<EditableSpan value={props.status} onChange={props.setStatusTC}/>
            :'status'}
            <AddPostField
                onClickHandler={props.onClickHandler}
                onChangeHandler={props.onChangeHandler}
                newPostText={props.profile.newPostText}
            />
            <Posts posts={props.profile.posts}/>
        </div>
    );
};