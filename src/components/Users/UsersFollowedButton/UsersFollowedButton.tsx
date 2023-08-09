import React from 'react';
import s from "../Users.module.css";

type  UsersFollowedButtonType = {
    followed: boolean
    userId: number
    name: string
    setFollow: (userID: number)=>void
    setUnfollow: (userID: number)=>void
}

export const UsersFollowedButton = (props: UsersFollowedButtonType) => {
    return (
        <div>
            {!props.followed
                ? <button
                    onClick={() => {
                        console.log('post')
                        props.setFollow(props.userId)
                    }}
                    className={s.followButton}>follow</button>
                : <button
                    onClick={() => {
                        console.log('delete')
                        props.setUnfollow(props.userId)
                    }}
                    className={s.followButton}>unfollow</button>}
        </div>
    );
};