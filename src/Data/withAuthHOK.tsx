import React, {ComponentType} from "react";
import {RootStateType} from "./redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

type MSTPType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
})
export function withAuthHOK<T>(Component: ComponentType<T>){

    const RedirectComponent = (props: MSTPType)=>{
            const {isAuth,  ...restProps} = props
            if (!isAuth ) return <Redirect to={'/login'}/>
            return <Component {...restProps as T}/>
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}