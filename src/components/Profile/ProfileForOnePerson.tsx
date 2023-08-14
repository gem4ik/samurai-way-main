import React from 'react';
import {AddPostField} from "./AddPostField/AddPostField";
import {Posts} from "./Posts/Posts";
import {ProfilePropsType} from "./ProfileContainer";
import {Redirect} from "react-router-dom";

export const ProfileForOnePerson = (props: ProfilePropsType) => {
    if(!props.isAuth) return <Redirect to={'/login'}/>
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
            <AddPostField
                onClickHandler={props.onClickHandler}
                onChangeHandler={props.onChangeHandler}
                newPostText={props.profile.newPostText}
            />
            <Posts posts={props.profile.posts}/>
        </div>
    );
};