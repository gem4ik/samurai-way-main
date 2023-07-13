import React from 'react';
import style from "./DialogsContainer.module.css";
import {Names} from "./Names/Names";
import {Message} from "./Message/Message";
import {Input} from "./Input/Input";
import {DialogsPropsType} from "./DialogsContainer";


export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={style.dialogs}>
            <Names dialogs={props.message.dialogs} />
            <Message messages={props.message.messages} />
            <Input
                value={props.message.newMessageText}
                onChangeHandler={props.onChangeHandler}
                onClickHandler={props.onClickHandler}
            />
        </div>
    );
};