import React from 'react';
import {Header} from "./Header";
import {ActionsType} from "../../Data/redux";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../Data/AuthReducer";
import {AuthAPI} from "../../api/api";

export type HeaderAPIContainerType = {
    render: () => JSX.Element
}

export class HeaderAPIContainer extends React.Component<HeaderPropsType, HeaderAPIContainerType> {
    componentDidMount() {
        AuthAPI.setAuthUserData()
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data.id, res.data.data.email, res.data.data.login)
                }
            })
    }
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
    setAuthUserData: (userId: number | null, email: string | null, login: string | null) => void
}
export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType


function mapStateToProps(state: ActionsType): mapStateToPropsType {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

function mapDispatchToProps(dispatch: Dispatch): mapDispatchToPropsType {
    return {
        setAuthUserData: (userId: number | null, email: string | null, login: string | null) => {
            dispatch(setAuthUserDataAC(userId, email, login))
        }
    }
}


export const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderAPIContainer)