import React from 'react';
import {Header} from "./Header";
import {AppDispatch, RootStateType} from "../../Data/redux";
import {connect} from "react-redux";
import {MeLogoutTC} from "../../Data/AuthReducer";
import {getIsAuth, getLogin} from "../../Data/Selectors/users-selectors";

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
        isAuth: getIsAuth(state),
        login: getLogin(state)
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