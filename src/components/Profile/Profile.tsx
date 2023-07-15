import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPostField} from "./AddPostField/AddPostField";
import {Posts} from "./Posts/Posts";
import {ProfilePropsType} from "./ProfileContainer";

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <AddPostField
                onClickHandler={props.onClickHandler}
                onChangeHandler={props.onChangeHandler}
                newPostText={props.profile.newPostText}
            />
            <Posts posts={props.profile.posts}/>
        </div>
    );
};