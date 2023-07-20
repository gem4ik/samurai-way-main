import React from 'react';
import s from './Users.module.css'
import {UserType} from "../../Data/Types";

export type UsersCompPropsType = {
    user: UserType[]
    setFollow: (value: boolean, id: number)=> void
}
export const Users = (props: UsersCompPropsType) => {
    return (
        <div className={s.users}>
            {props.user.map(u => {
                return <div key={u.id} className={s.card}>
                    <img
                        className={s.avatar}
                        src={`${u.photos.large ? u.photos.large : u.photos.small}`}
                        alt="avatar"/>
                    {u.name}

                    <button className={s.followButton}>{u.followed ? "followed" : "unfollowed"}</button>
                </div>
            })}
        </div>
    )
}