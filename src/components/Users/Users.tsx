import React from 'react';
import s from './Users.module.css'
import {FriendsType} from "../../Data/Types";

export type UsersCompPropsType = {
    user: FriendsType[]
    setFollow: (value: boolean, id: number)=> void
}

export const Users = (props: UsersCompPropsType) => {
    return (
        <div className={s.users}>
            --------------------------------------------------------
        </div>
    )
}