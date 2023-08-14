import React from 'react';
import s from './Users.module.css'
import {UserType} from "../../Data/Types";
import user from "./user.png"
import {Preloader} from "../common/preloader/Preloader";
import {NavLink, Redirect} from "react-router-dom";
import {UsersFollowedButton} from "./UsersFollowedButton/UsersFollowedButton";

export type UsersCompPropsType = {
    user: UserType[]
    pageSize: number
    totalUsersCount: number
    setCurrentPage: (currentPage: number) => void
    currentPage: number
    isLoading: boolean
    isAuth: boolean
    setFollow: (userID: number)=>void
    setUnfollow: (userID: number)=>void
}
export const Users = (props: UsersCompPropsType) => {
    let pages = []
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i)
        }
    }
    if(!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.usersWrapper}>
            <div className={s.pagination}>
                {pages.map(p => {
                    return <button
                        key={p}
                        className={`${s.pageButton} ${(props.currentPage === p) ? s.activePage : s.pages}`}
                        onClick={() => props.setCurrentPage(p)}
                    >{p}</button>
                })}
            </div>
            <div className={s.users}>
                <div className={s.cardWrapper}>
                    {props.user.map(u => {
                        return <div key={u.id} className={s.card}>
                            {props.isLoading ? <Preloader/> : <div>
                                <NavLink to={'/profile/' + u.id}>
                                    {u.photos.large || u.photos.small ? <img
                                            className={s.avatar}
                                            src={`${u.photos.large ? u.photos.large : u.photos.small}`}
                                            alt="avatar"/> :
                                        <img className={s.zaglushkaUser} src={user} alt="zaglushka"/>
                                    }
                                </NavLink>
                            </div>}
                            {u.name}
                           <UsersFollowedButton
                               setFollow={props.setFollow}
                               setUnfollow={props.setUnfollow}
                               name={u.name}
                               userId={u.id}
                               followed={u.followed} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}