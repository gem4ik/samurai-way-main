import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'

export const Users = (props: UsersPropsType) => {

    return (
        <div className={s.users}>
            {props.users.map(user=>{
                const onClickHandler=(value:boolean = user.followed, id:string = user.id)=> {
                    props.setFollow(value, id)
                }
                return(
                    <div className={s.FriendWrapper} key={user.id}>
                        <img className={s.friendsPhoto} src={user.photoUrl} alt={user.fullName} />
                        <div>
                            <h3>{user.fullName}</h3>
                            <p>Status: {user.status}</p>
                            <p>Location: {user.location.city}, {user.location.country}</p>
                            <button
                                className={s.followButton}
                                onClick={()=>onClickHandler()}
                            >
                                {user.followed ? 'Unfollow' : 'Follow'}
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}