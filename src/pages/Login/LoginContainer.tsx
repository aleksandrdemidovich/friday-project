import React from 'react'
import {Formik} from "formik";
import Login from "./Login";
import {AuthStateType, loginTC} from "./loginReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {PATH} from "../Routes";
import {Redirect} from "react-router-dom";


type ErrorsType = {
    email?: string
    password?: string
}



function LoginContainer() {
    const {isLoggedIn} = useSelector<AppStateType, AuthStateType>(state => state.auth)
    const dispatch = useDispatch();
    if (isLoggedIn) {
        return <Redirect to={PATH.PROFILE}/>
    }
    return (
        <>
            <Formik
                initialValues={{email: 'nya-admin@nya.nya', password: '1qazxcvBG', rememberMe: false}}
                validate={values => {
                    const errors: ErrorsType = {};

                    if (!values.email) {
                        errors.email = 'This field is required!';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email format';
                    }

                    if (!values.password) {
                        errors.password = 'This field is required!';
                    } else if (values.password.length < 8) {
                        errors.password = 'Password must be more than 7 characters';
                    }

                    return errors;
                }}
                onSubmit={ ({email, password, rememberMe}) => {
                  dispatch( loginTC(email, password, rememberMe))
                }}
            >
                {
                    (props) => (
                        <Login {...props} />
                    )
                }

            </Formik>

        </>
    )
}

export default LoginContainer