import React from 'react'
import s from './InputS.module.css'



import eyeImg from '../../../assets/images/eye.svg';

import TextField from '@mui/material/TextField';

export const InputS = (props) => {
    return (
        <div className={s.InputS}>
            <TextField id={props.id} label={props.label} type={props.type} variant="standard" className={s.input} />
            <img className={s.eyeImg} src={eyeImg} alt="latter"/>        
        </div>
    )
}
