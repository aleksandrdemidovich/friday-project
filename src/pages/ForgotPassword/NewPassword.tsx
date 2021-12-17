import s from "./NewPassword.module.css"
import React from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {inputNewPassword, RecoveryStatusType} from "../../redux/passwordRecovery-reducer";
import {AppStateType} from "../../redux/store";


type FormikErrorType = {
    password?: string
}

function NewPassword() {
    const {token} = useParams<{ token: string }>()

    const dispatch = useDispatch();
    const appStatus = useSelector<AppStateType, RecoveryStatusType>(state => state.app.status);
    const appError = useSelector<AppStateType, string>(state => state.app.error);



    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (values.password.length < 3) {
                errors.password = 'Min length 7 symbols';
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(inputNewPassword(values.password, token))
        },
    })

    return (
        <div className={s.newPassword}>
            
            <h2 className={s.title}>It-incubator</h2>
            <h3 className={s.subtitle}>Create new password</h3>

            {appStatus === 'loading' && <p style={{color: "green", margin: 0}}>Loading...</p>}

            <form className={s.FormBox} onSubmit={formik.handleSubmit}>
                <div className={s.inputWrap}>
                    <input className={s.field}
                        id="password"
                        name="password"
                        type="password"
                        autoComplete='off'
                        disabled={appStatus === 'loading'}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder="Password"
                        onBlur={formik.handleBlur}
                    />
                </div>

                {formik.touched.password && formik.errors.password &&
                <div style={{color: 'red'}}>{formik.errors.password}</div>}
                {appError && <div style={{color: 'red'}}>{appError}</div>}

                <p className={s.textLight}>Create new password and we will send you further instructions to email</p>

                <button className={s.btnBlue} type="submit" disabled={appStatus === 'loading'}>Create new password</button>
            </form>
        </div>
    )
}

export default NewPassword