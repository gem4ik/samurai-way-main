import React, {ChangeEvent} from "react";
import {ProfileType} from "../../Data/Types";
import {addCurrentPostText, addPost, setUserProfileTC} from "../../Data/ProfileReducer";
import {connect} from "react-redux";
import {AppDispatch, RootStateType} from "../../Data/redux";
import {ProfileForOnePerson} from "./ProfileForOnePerson";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthHOK} from "../../Data/withAuthHOK";
import {compose} from "redux";

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
    isAuth: boolean
}
type mapDispatchToPropsType = {
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>)=> void
    onClickHandler: ()=> void
    setUserProfileTC: (userId: string)=> void
}
export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType
function mapStateToProps (state: RootStateType): mapStateToPropsType {
    return {
        profile: state.profilePage,
        isAuth: state.auth.isAuth
    }
}
function mapDispatchToProps (dispatch: AppDispatch): mapDispatchToPropsType {
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


export default compose<React.ComponentType>(
    withRouter,
    withAuthHOK,
    (connect(
            mapStateToProps,
            mapDispatchToProps
        ))
)(ProfileAPIContainer)