import style from "./Dialogs.module.css"
import {FC} from "react";
import {Input} from "./Input/Input";
import {Names} from "./Names/Names";
import {Message} from "./Message/Message";
import {ActionTypes, MessageType} from "../Data/Types";

type DialogsPropsType = {
    message: MessageType
    dispatch: (action: ActionTypes) => void
}
export const Dialogs: FC<DialogsPropsType> = (props) => {
    
    return (
        <div className={style.dialogs}>
            <Names dialogs={props.message.dialogs} />
            <Message messages={props.message.messages} />
            <Input
                value={props.message.newMessageText}
                dispatch={props.dispatch}
            />
        </div>
    )
}