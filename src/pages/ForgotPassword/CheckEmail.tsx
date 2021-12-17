import s from "./CheckEmail.module.css"
import React from 'react'
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import letterImg from '../../assets/images/letter.svg';



function CheckEmail() {

    const email = useSelector<AppStateType, string>(state => state.passwordRecovery.email)

    return (
        <div className={s.checkEmail}>
            <h2 className={s.title}>It-incubator</h2>
            <img className={s.letterImg} src={letterImg} alt="latter" />           
            <h3 className={s.subtitle}>Check Email</h3>
            <p className={s.textLight}>We've sent an Email with instructions to {email}</p>
        </div>
    )
}

export default CheckEmail
