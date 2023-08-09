import React, {ChangeEvent} from "react";
import {ProfileType, UserProfileType} from "../../Data/Types";
import {addCurrentPostText, addPost, setUserProfile} from "../../Data/ProfileReducer";
import {connect} from "react-redux";
import {ActionsType} from "../../Data/redux";
import {Dispatch} from "redux";
import {setIsLoading} from "../../Data/UsersReducer";
import {ProfileForOnePerson} from "./ProfileForOnePerson";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ProfileAPI} from "../../api/api";

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
        this.props.setIsLoading(true)
            ProfileAPI.setUsers(userId)
            .then(res => {
                this.props.setUserProfile(res.data)
                this.props.setIsLoading(false)
            })
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
    setIsLoading: (isLoading: boolean)=> void
    setUserProfile: ( userProfile: any)=> void
}
export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType


function mapStateToProps (state: ActionsType): mapStateToPropsType {
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
        setIsLoading: (isLoading: boolean) => {
            dispatch(setIsLoading(isLoading))
        },
        setUserProfile: (userProfile: any) => {
            dispatch(setUserProfile(userProfile))
        }
    }
}

export const ProfileWithRouterContainer = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileWithRouterContainer)