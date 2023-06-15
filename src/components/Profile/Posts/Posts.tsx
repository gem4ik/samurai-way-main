import React from 'react';
import style from './Posts.module.css'
import {Poststype} from "../../Data/Types";

export type PostsPropsType = {
    posts: Poststype[]
}

export const Posts = (props: PostsPropsType) => {

    return (
        <div>
            {props.posts.map(el=>{
                return(
                    <div className={style.post}>
                        <div>
                            <img src="https://sun9-46.userapi.com/impg/A4EXnydiJW_Y4jX-5K69pWSJiZek3_Q3Ls5oGg/I98nIVmKlpY.jpg?size=605x807&quality=95&sign=ae89b7966745e7b48af6111a03aefe34&type=album" alt="моё фото"/>
                            {el.post}
                        </div>
                        <div className={style.likeValue}>{el.likeValue}</div>
                    </div>
                )
            })}
        </div>
    )
}