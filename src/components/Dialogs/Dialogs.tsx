import style from "./Dialogs.module.css"
import {FC} from "react";
import {Input} from "./Input/Input";
import {Names} from "./Names/Names";
import {Message} from "./Message/Message";
import {ActionTypes, MessageType} from "../../Data/Types";
import {addMessageAC, addMessageTextAC} from "../../Data/DialogsReducer";

type DialogsPropsType = {
    message: MessageType
    dispatch: (action: ActionTypes) => void
}
export const DialogsContainer: FC<DialogsPropsType> = (props) => {

    const onChangeHandler = (title: string) => {
        props.dispatch(addMessageTextAC(title))
    }

    const onClickHandler = () => {
        props.dispatch(addMessageAC())
    }

    return (
        <div className={style.dialogs}>
            <Names dialogs={props.message.dialogs} />
            <Message messages={props.message.messages} />
            <Input
                value={props.message.newMessageText}
                onChangeHandler={onChangeHandler}
                onClickHandler={onClickHandler}
            />
        </div>
    )
}