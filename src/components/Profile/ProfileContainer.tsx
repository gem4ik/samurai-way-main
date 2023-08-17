import React, {ChangeEvent} from "react";
import {ProfileType} from "../../Data/Types";
import {addCurrentPostText, addPost, getStatusTC, setStatusTC, setUserProfileTC} from "../../Data/ProfileReducer";
import {connect} from "react-redux";
import {AppDispatch, RootStateType} from "../../Data/redux";
import {ProfileForOnePerson} from "./ProfileForOnePerson";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthHOK} from "../../Data/withAuthHOK";
import {compose} from "redux";
import {getProfilePage, getStatus} from "../../Data/Selectors/profile-selectors";
import {getIsAuth} from "../../Data/Selectors/users-selectors";

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
            userId = "29099"
        }
        this.props.setUserProfileTC(userId)
        this.props.getStatusTC(userId)
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
    status: string
}
type mapDispatchToPropsType = {
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>)=> void
    onClickHandler: ()=> void
    setUserProfileTC: (userId: string)=> void
    getStatusTC: (userId: string) => void
    setStatusTC: (status: string) => void
}
export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType
function mapStateToProps (state: RootStateType): mapStateToPropsType {
    return {
        profile: getProfilePage(state),
        isAuth: getIsAuth(state),
        status: getStatus(state)
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
        },
        getStatusTC: (userId: string) => {
            dispatch(getStatusTC(userId))
        },
        setStatusTC: (status: string) => {
            dispatch(setStatusTC(status))
        }
    }
}

export default compose<React.ComponentType>(
    withAuthHOK,
    withRouter,
    (connect(
            mapStateToProps,
            mapDispatchToProps
        ))
)(ProfileAPIContainer)