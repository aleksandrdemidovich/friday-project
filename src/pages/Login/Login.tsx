import s from "./Login.module.css"
import React from 'react'
import { Form, FormikProps} from "formik";
import {NavLink} from 'react-router-dom'
import {PATH} from "../Routes";
import Title from "../../components/common/Title/Title";
import {AppError} from "../../components/common/appError/AppError";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    TextField
} from "@mui/material";
import s1 from './../../components/common/InputMail/InputMail.module.css'
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";


type LoginPropsType = FormikProps<any> & {
    error: string | null,
}


export const Login: React.FC<LoginPropsType> =
    ({handleSubmit, getFieldProps, error}) => {

        const appStatus = useSelector((state: AppStateType) => state.app.status)

        const [showPassword, setShowPassword] = React.useState(false);


        const handleClickShowPassword = () => {
            setShowPassword(!showPassword);
        };

        return (
            <>
                <div className={s.login}>
                    <Title/>
                    <h3 className={s.subtitle}>Sign In</h3>
                    <Form className={s.formBox} onSubmit={handleSubmit}>
                        <div className={s.registrWrap}>
                            <TextField id="email"
                                       label="Email"
                                       type='email'
                                       variant="standard"
                                       className={s1.input}
                                       {...getFieldProps('email')}   />
                        </div>
                        <p/>
                        <div className={s.registrWrap}>
                            <FormControl variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    className={s1.input}
                                    {...getFieldProps('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}>
                                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>

                        </div>
                        <FormControlLabel id="rememberMe" control={<Checkbox {...getFieldProps('rememberMe')}  />}
                                          label="Remember me"/>
                        <p/>
                        <NavLink className={s.linkTransparent} to={PATH.FORGOT_PASSWORD}>
                            Forgot Password
                        </NavLink>
                        <button className={s.btnBlue} type={'submit'} disabled={appStatus === "loading"}>Login</button>

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