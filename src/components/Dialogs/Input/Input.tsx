import style from "./Input.module.css"
import React, {ChangeEvent} from "react";

export type InputPropsType = {
    value: string
    onChangeHandler: (title: string)=> void
    onClickHandler: ()=> void
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            props.onChangeHandler(e.currentTarget.value)
        }
    }

    return (
        <div className={style.inputArea}>
                <textarea
                    value={props.value}
                    onChange={onChangeHandler}
                    className={style.textarea}
                          placeholder="your message">
            </textarea>
            <button
                onClick={props.onClickHandler}
                className={style.button}>send</button>
        </div>
    )
}