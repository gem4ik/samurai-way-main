import React from 'react';
import {connect} from "react-redux";
import {AppDispatch, RootStateType} from "../../Data/redux";
import {useFormik} from "formik";
import {MeLoginTC} from "../../Data/AuthReducer";
import {Redirect} from "react-router-dom";

export type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = (props: LoginPropsType) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Email required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.password) {
                errors.password = 'Password Required'
            } else if (values.password.length < 6){
                errors.password = 'at list 6 symbols'
            }
            return errors
        },
        onSubmit: values => {
            props.loginTC(values.email, values.password, values.rememberMe)
            formik.resetForm()
        },
    })

    // if(props.isAuth) {
    //     return <Redirect to={'/profile'}/>
    // }

    return <div>
        <h3>LOGIN</h3>
        <div>
            <p>To log in get registered
                <a href={'https://social-network.samuraijs.com/'}
                   target={'_blank'} rel="noreferrer"> here
                </a>
            </p>
            <p>or use common test account credentials:</p>
            <p>Email: free@samuraijs.com</p>
            <p>Password: free</p>
        </div>
            <form onSubmit={formik.handleSubmit}>
               <div>
                   <input
                       {...formik.getFieldProps('email')}/>
                   {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> :null}
               </div>
                <input
                    {...formik.getFieldProps('password')}
                    type="password"/>
                {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> :null}
                <div>
                    <input
                        type='checkbox' {...formik.getFieldProps('rememberMe')}/>
                    <label>remember me</label>
                </div>
                <button type={'submit'}>
                    Login
                </button>
            </form>
    </div>
}
type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps =(state: RootStateType)=>{
    return {
        isAuth:state.auth.isAuth
    }
}
type mapDispatchToPropsType = {
    loginTC: (email: string | null, password: string | null, rememberMe: boolean | null) => void
}
const mapDispatchToProps = (dispatch: AppDispatch) => ({
    loginTC: (email: string | null, password: string | null, rememberMe: boolean | null = false)=>{
        dispatch(MeLoginTC(email, password, rememberMe))
    }
})
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps )(Login)