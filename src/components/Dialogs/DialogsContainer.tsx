import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../../Data/redux";
import {addMessageAC, addMessageTextAC} from "../../Data/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {MessageType} from "../../Data/Types";


type mapStateToPropsType = {
    message: MessageType
}
type mapDispatchToPropsType = {
    onChangeHandler: (title: string)=> void
    onClickHandler: () => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

function mapStateToProps (state: RootStateType): mapStateToPropsType {
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

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)