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
                <h3 className={s.loginSubtitle}>Sign In</h3>
                <Form className={s.FormBox} onSubmit={handleSubmit}>
                    <div className={s.registrWrap}>
                        <label className={s.loginLabel}>Email</label>
                        <input className={s.loginField}
                        id="email"
                        type="email"
                        {...getFieldProps('email')}
                    />
                    </div>
                    <p/>
                    <div className={s.registrWrap}>
                        <label className={s.loginLabel}>Password</label>
                        <div className={s.inputWrap}>
                            <input className={s.loginField}
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
                    
                    <NavLink className={s.linkTransparent} to={PATH.FORGOT_PASSWORD}>
                    Forgot Password
                </NavLink>
                    <button className={s.btnBlue} type={'submit'} disabled={loading}>Login</button>
                
                <div className={s.linkWrap}>
                <p className={s.textLight}>
                Don’t have an account?
                </p>
                <NavLink className={s.linkBlue} to={PATH.SIGN_UP}>
                    Sign up
                </NavLink>
                </div>
            </Form>
                {/* {error !== null && <div style={{color: 'red'}}>{error}</div>} */}
                </div>
                
            </>

        );
    }

export default Login