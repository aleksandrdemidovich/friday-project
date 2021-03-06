import s from './AppError.module.css'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


type AppErrorPropsType = {
    error:string
}


export const AppError = (props:AppErrorPropsType) => {
    return (
        <div className={s.appError}>
            <Alert className={s.errorRed}  severity="error">{props.error}</Alert>          
        </div>
    )
}
// style={{color: 'red'}}