import style from "./Input.module.css"
import React, {ChangeEvent} from "react";
import {ActionTypes} from "../../Data/Types";
import {addMessageAC, addMessageTextAC} from "../../Data/DialogsReducer";

export type InputPropsType = {
    value: string
    dispatch: (action: ActionTypes) => void
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            props.dispatch(addMessageTextAC(e.currentTarget.value))
        }
    }

    return (
        <div className={style.inputArea}>
                <textarea
                    value={props.value}
                    onChange={(e)=>{onChangeHandler(e)}}
                    className={style.textarea}
                          placeholder="your message">
            </textarea>
            <button
                onClick={()=>{props.dispatch(addMessageAC())}}
                className={style.button}>send</button>
        </div>
    )
}