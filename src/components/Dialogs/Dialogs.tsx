import React from 'react';
import style from "./DialogsContainer.module.css";
import {Names} from "./Names/Names";
import {Message} from "./Message/Message";
import {Input} from "./Input/Input";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";


export const Dialogs = (props: DialogsPropsType) => {
    if(!props.isAuth) return <Redirect to={'/login'}/>
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