import React, {useState} from 'react'
import s from "./PacksList.module.css"
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    TextField
} from "@mui/material";
import {useDispatch} from "react-redux";
import {addNewCards, addNewPack} from "../../redux/cardPacksReducer";
import CloseIcon from '@mui/icons-material/Close';



type AlertDialogForDeletePackPropsType = {
    open: boolean
    setOpenAlertDialogForNewPack: (newStateValue: boolean) => void
    alertTitle: string
    buttonName: string
    inputLabel: string
    type: 'pack' | 'card'
}

function AlertDialogForNewValue(props: AlertDialogForDeletePackPropsType) {


    const [name, setName] = useState('')


    const dispatch = useDispatch()


    const packNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const handleOpen = ( ) => {
        props.setOpenAlertDialogForNewPack(true)

    }
    const handleClose = () => {
        props.setOpenAlertDialogForNewPack(false)
    };
    const editNewPackName = () => {
        if(props.type === 'pack'){
            dispatch(addNewPack(name))
            props.setOpenAlertDialogForNewPack(false)
        } else {
            dispatch(addNewCards(name))
            props.setOpenAlertDialogForNewPack(false)
        }

    };


    return (
        <div>
            <button className={s.btnBlue} onClick={handleOpen}>{props.buttonName}</button>
            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {props.alertTitle}
                    <IconButton onClick={handleClose} style={{float:'right'}}>
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>
                <DialogContent style={{width:'500px'}}>
                    <DialogContentText id="alert-dialog-description">
                        <TextField id="outlined-basic" onChange={packNameHandler} fullWidth label={props.inputLabel} variant="standard" />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color={"error"} onClick={handleClose}>Cancel</Button>
                    <Button  onClick={editNewPackName} autoFocus>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AlertDialogForNewValue