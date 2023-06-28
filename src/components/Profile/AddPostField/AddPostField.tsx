import React, {ChangeEvent} from 'react';
import style from './AddPostField.module.css'

type AddPostFieldType = {
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onClickHandler: () => void
    newPostText: string
}

export const AddPostField = (props: AddPostFieldType) => {
    return (
        <div className={style.postContainer}>
            <div>My posts</div>
            <textarea
                onChange={props.onChangeHandler}
                className={style.textitem}
                value={props.newPostText}
            ></textarea>
            <button
                onClick={props.onClickHandler}
                className={style.button}>add post
            </button>
        </div>
    )
}
