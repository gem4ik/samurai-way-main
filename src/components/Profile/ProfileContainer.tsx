import {ChangeEvent} from "react";
import {ProfileType} from "../../Data/Types";
import {addCurrentPostTextAC, addPostAC} from "../../Data/ProfileReducer";
import {Profile} from "./ProfileInfo/Profile";
import {connect} from "react-redux";
import {ActionsType} from "../../Data/redux";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    profile: ProfileType
}

type mapDispatchToPropsType = {
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>)=> void
    onClickHandler: ()=> void
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType


function mapStateToProps (state: ActionsType): mapStateToPropsType {
    debugger
    return {
        profile: state.profilePage
    }
}
function mapDispatchToProps (dispatch: Dispatch): mapDispatchToPropsType {
    return {
        onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            debugger
            if (e.currentTarget.value) {
                dispatch(addCurrentPostTextAC(e.currentTarget.value))
            }
        },
        onClickHandler: () => {
            dispatch(addPostAC())
        }
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)