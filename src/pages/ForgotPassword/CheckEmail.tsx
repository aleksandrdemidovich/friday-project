import s from "./CheckEmail.module.css"
import React from 'react'
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import letterImg from '../../assets/images/letter.svg';
import Title from "../../components/common/Title/Title";



function CheckEmail() {

    const email = useSelector<AppStateType, string>(state => state.auth.email)

    return (
        <div className={s.checkEmail}>
            <Title/>           
            <img className={s.letterImg} src={letterImg} alt="latter" />           
            <h3 className={s.subtitle}>Check Email</h3>
            <p className={s.textLight}>We've sent an Email with instructions to {email}</p>
        </div>
    )
}

export default CheckEmail
