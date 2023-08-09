import React, {ChangeEvent} from "react";
import {ProfileType} from "../../Data/Types";
import {addCurrentPostText, addPost, setUserProfileTC} from "../../Data/ProfileReducer";
import {connect} from "react-redux";
import {RootStateType} from "../../Data/redux";
import {Dispatch} from "redux";
import {ProfileForOnePerson} from "./ProfileForOnePerson";
import {RouteComponentProps, withRouter} from "react-router-dom";

export type ProfileAPIType = {
    render: () => JSX.Element
}
export type PathParamsType = {
    userId: string
}
export type CommonPropsType = {
    someString: string
}

class ProfileAPIContainer extends React.Component<
    ProfilePropsType &
    RouteComponentProps<PathParamsType & CommonPropsType>, ProfileAPIType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = "29680"
        }
        this.props.setUserProfileTC(userId)
    }
    render() {
        return <div>
            <ProfileForOnePerson {...this.props}/>
        </div>
    }
}

type mapStateToPropsType = {
    profile: ProfileType
}
type mapDispatchToPropsType = {
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>)=> void
    onClickHandler: ()=> void
    setUserProfileTC: (userId: string)=> void
}
export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType


function mapStateToProps (state: RootStateType): mapStateToPropsType {
    return {
        profile: state.profilePage
    }
}
function mapDispatchToProps (dispatch: Dispatch): mapDispatchToPropsType {
    return {
        onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            if (e.currentTarget.value) {
                dispatch(addCurrentPostText(e.currentTarget.value))
            }
        },
        onClickHandler: () => {
            dispatch(addPost())
        },
        setUserProfileTC: (userId:string)=>{
            dispatch(setUserProfileTC(userId))
        }
    }
}

export const ProfileWithRouterContainer = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileWithRouterContainer)