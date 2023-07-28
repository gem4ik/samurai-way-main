import React, {ChangeEvent} from "react";
import {ProfileType, UserProfileType} from "../../Data/Types";
import {addCurrentPostText, addPost, setUserProfile} from "../../Data/ProfileReducer";
import {connect} from "react-redux";
import {ActionsType} from "../../Data/redux";
import {Dispatch} from "redux";
import axios from "axios";
import {setIsLoading} from "../../Data/UsersReducer";
import {ProfileForOnePerson} from "./ProfileForOnePerson";
import {Profile} from "./Profile";

export type ProfileAPIType = {
    render: () => JSX.Element
}

class ProfileAPIContainer extends React.Component<ProfilePropsType, ProfileAPIType>{
    componentDidMount() {
        this.props.setIsLoading(true)
        axios.get<UserProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                this.props.setUserProfile(res.data)
                this.props.setIsLoading(false)
            })
    }
    render() {
        return <div>
            <ProfileForOnePerson {...this.props}/>
            <Profile {...this.props}/>
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

export const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileAPIContainer)