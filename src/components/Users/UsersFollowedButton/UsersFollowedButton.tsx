import React from 'react';
import axios from "axios";
import {FollowPostResponceType} from "../../../Data/Types";
import s from "../Users.module.css";

type  UsersFollowedButtonType = {
    followed: boolean
    setFollow: (value: boolean, id: number) => void
    userId: number
}

export const UsersFollowedButton = (props: UsersFollowedButtonType) => {
    return (
        <div>
            {!props.followed
                ? <button
                    onClick={() => {
                        axios.post<FollowPostResponceType>(`https://social-network.samuraijs.com/api/1.0/follow/${props.userId}`, null, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "31d3b244-d207-4062-b145-297089d8f2c1"
                            }
                        })
                            .then(res => {
                                if (res.data.resultCode === 0) {

                                    props.setFollow(true, props.userId)
                                }
                            })}}
                    className={s.followButton}>followed</button>
                : <button
                    onClick={() => {
                        axios.delete<FollowPostResponceType>(`https://social-network.samuraijs.com/api/1.0/follow/${props.userId}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "31d3b244-d207-4062-b145-297089d8f2c1"
                            }
                        })
                            .then(res => {
                                if (res.data.resultCode === 0) {
                                    props.setFollow(false, props.userId)
                                }
                            })}}
                    className={s.followButton}>unfollowed</button>}
        </div>
    );
};