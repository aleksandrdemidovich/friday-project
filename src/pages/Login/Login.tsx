import s from "./Login.module.css"
import React from 'react'
import {Field, Form, FormikProps} from "formik";
import {NavLink} from 'react-router-dom'
import {PATH} from "../Routes";
import eyeImg from '../../assets/images/eye.svg';
import Title from "../../components/common/Title/Title";
import { AppError } from "../../components/common/appError/AppError";
import { InputS } from "../../components/common/InputS/InputS";
// import Input from "../../components/common/Input/Input";

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
                
                <h3 className={s.subtitle}>Sign In</h3>
                <Form className={s.formBox} onSubmit={handleSubmit}>
                    <div className={s.registrWrap}>                                    
                        <InputS
                        id={1}
                        type={'email'}
                        label={"Email"}
                        {...getFieldProps('email')}
                        />                      
                    </div>
                    <p/>
                    <div className={s.registrWrap}>                
                        <InputS
                        id={2}
                        type={"password"}
                        label={"Password"}
                        {...getFieldProps('password')}/>                       
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
                {error !== null && <AppError error={error}/>}
                </div>
                
            </>
        );
    }

export default Login