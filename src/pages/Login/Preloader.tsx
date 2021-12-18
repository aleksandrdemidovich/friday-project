import s from "./Preloader.module.css"
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

export const Preloader = () => {
    return (
        <div className={s.preloader}>
         <CircularProgress /> 
            {/* <h1>...LOADING</h1> */}
        </div>
    )
}