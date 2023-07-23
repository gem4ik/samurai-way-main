import React from 'react';
import s from './Users.module.css'
import {UserType} from "../../Data/Types";

export type UsersCompPropsType = {
    user: UserType[]
    setFollow: (value: boolean, id: number)=> void
    pageSize: number
    totalUsersCount: number
    setCurrentPage: (currentPage: number) => void
    currentPage: number
}
export const Users = (props: UsersCompPropsType) => {
    let pages = []
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)
    for (let i=1;i<=pagesCount;i++) {
        if(pages.length < 10) {
            pages.push(i)
        }
    }
    return (
        <div className={s.usersWrapper}>
            <div className={s.pagination}>
                {pages.map(p => {
                    return <button
                        key={p}
                        className={`${s.pageButton} ${(props.currentPage === p) ? s.activePage : s.pages}`}
                        onClick={()=>props.setCurrentPage(p)}
                    >{p}</button>
                })}
            </div>
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
        </div>
    )
}