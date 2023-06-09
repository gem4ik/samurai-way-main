import {addMessageAC, addMessageTextAC} from "../../Data/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {MessageType} from "../../Data/Types";
import {Dispatch} from "redux";
import {ActionsType} from "../../Data/redux";


type mapStateToPropsType = {
    message: MessageType
}

type mapDispatchToPropsType = {
    onChangeHandler: (title: string)=> void
    onClickHandler: () => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

function mapStateToProps (state: ActionsType): mapStateToPropsType {
    return {
        message: state.dialogsPage
    }
}
function mapDispatchToProps (dispatch: Dispatch): mapDispatchToPropsType {
    return{
        onChangeHandler: (title: string) => {
            dispatch(addMessageTextAC(title))
        },
        onClickHandler: () => {
            dispatch(addMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)