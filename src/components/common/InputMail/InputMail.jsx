import React from 'react'
import s from './InputMail.module.css'
import eyeImg from '../../../assets/images/eye.svg';
import TextField from '@mui/material/TextField';


export const InputMail = (props) => {
    return (
        <div className={s.InputMail}>
            <TextField id={props.id} label={props.label} type={props.type} variant="standard" className={s.input} />
            {/* <img className={s.eyeImg} src={eyeImg} alt="latter"/>         */}
        </div>
    )
}

