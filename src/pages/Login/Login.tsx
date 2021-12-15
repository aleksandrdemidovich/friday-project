import s from "./Login.module.css"
import React from 'react'
import {Field, Form, FormikProps} from "formik";
import {NavLink} from 'react-router-dom'
import {PATH} from "../Routes";

type LoginPropsType = FormikProps<any> & {
    error: string | null,
    loading: boolean
}


export const Login: React.FC<LoginPropsType> =
    ({handleSubmit, getFieldProps, error, loading }) => {

        return (
        <>
            <div className={s.login}>
                <h2 className={s.loginTitle}>It-incubator</h2>
                <span className={s.loginSubtitle}>Sign In</span>
                <Form className={s.FormBox} onSubmit={handleSubmit}>
                    <div className={s.loginInput}>
                        <label className={s.loginLabel}>Email</label>
                        <input className={s.loginName}
                        id="email"
                        type="email"
                        {...getFieldProps('email')}
                    />
                    </div>
                    <p/>
                    <div className={s.loginInput}>
                        <label className={s.loginLabel}>Password</label>
                        <div className={s.inputContainer}>
                            <input className={s.loginName}
                        id="email"
                        type="password"
                        {...getFieldProps('password')}
                    />
                        </div>
                    </div>
                    <p/>
                    {/* <label>Remember me</label>
                    <input
                        id="rememberMe"
                        type="checkbox"
                        {...getFieldProps('rememberMe')}
                    /> */}
                    <p/>
                    <button className={s.BtnTransparent} type={'submit'}>Forgot Password</button>
                    <button className={s.BtnBlue} type={'submit'} disabled={loading}>Login</button>
                </Form>
                <div className={s.linkWrap}>
                <NavLink className={s.notAccaunt} to={PATH.SIGN_UP}>
                Don’t have an account?
                </NavLink>
                <NavLink className={s.signUp} to={PATH.SIGN_UP}>
                    Sign up
                </NavLink>
                </div>
                {/* {error !== null && <div style={{color: 'red'}}>{error}</div>} */}
                </div>
            </>

        );
    }

export default Login