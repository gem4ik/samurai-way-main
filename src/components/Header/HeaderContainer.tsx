import React from 'react';
import {Header} from "./Header";
import {AppDispatch, RootStateType} from "../../Data/redux";
import {connect} from "react-redux";
import {MeLogoutTC} from "../../Data/AuthReducer";

export type HeaderAPIContainerType = {
    render: () => JSX.Element
}

export class HeaderAPIContainer extends React.Component<HeaderPropsType, HeaderAPIContainerType> {
    render() {
        return <div>
            <Header {...this.props}/>
        </div>
    }
}

type mapStateToPropsType = {
    isAuth: boolean
    login: string|null
}
type mapDispatchToPropsType = {
    logout: () => void
}
export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType


function mapStateToProps(state: RootStateType): mapStateToPropsType {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

function mapDispatchToProps(dispatch: AppDispatch): mapDispatchToPropsType {
    return {
        logout: () => {
            dispatch(MeLogoutTC())
        }
    }
}


export const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderAPIContainer)