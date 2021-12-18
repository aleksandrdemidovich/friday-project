import s from "./Login.module.css"
import React from 'react'
import {Field, Form, FormikProps} from "formik";
import {NavLink} from 'react-router-dom'
import {PATH} from "../Routes";
import eyeImg from '../../assets/images/eye.svg';
import Title from "../../components/common/Title/Title";

type LoginPropsType = FormikProps<any> & {
    error: string | null,
    loading: boolean
}


export const Login: React.FC<LoginPropsType> =
    ({handleSubmit, getFieldProps, error, loading }) => {

        return (
        <>
            <div className={s.login}>
            <Title/>
                {/* <h2 className={s.title}>It-incubator</h2> */}
                <h3 className={s.subtitle}>Sign In</h3>
                <Form className={s.formBox} onSubmit={handleSubmit}>
                    <div className={s.registrWrap}>                       
                        <input className={s.field}
                        id="email"
                        type="email"
                        {...getFieldProps('email')}
                        />
                        <label className={s.label}>Email</label>
                        <img className={s.eyeImg} src={eyeImg} alt="latter" />
                    </div>
                    <p/>
                    <div className={s.registrWrap}>
                        <label className={s.label}>Password</label>
                        <div className={s.inputWrap}>
                            <input className={s.field}
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