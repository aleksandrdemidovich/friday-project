import s from "./PacksList.module.css"
import React from 'react'
// import BtnActions from "../../pages/PacksList/BtnActions/BtnActions";

import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useDispatch} from "react-redux";
import {fetchDeletePack} from "../../redux/cardPacksReducer";
import BtnActions from "./BtnActions/BtnActions";

type AlertDialogForDeletePackPropsType = {
    packName: string
    open: boolean
    setOpenAlertDialogForDeletePack: (newStateValue: boolean) => void
    packId: string
}

function AlertDialogForDeletePack(props: AlertDialogForDeletePackPropsType) {


    const dispatch = useDispatch()


    const handleOpen = ( ) => {
        props.setOpenAlertDialogForDeletePack(true)

    }
    const removePackHandler = () => {
        dispatch(fetchDeletePack(props.packId))
        props.setOpenAlertDialogForDeletePack(false)
    };


    const handleClose = () => {
        props.setOpenAlertDialogForDeletePack(false)
    };

    const styleBtnDelete: any = {    
        color: '#FFFFFF',
        background: '#F1453D',        
    }
  

    return (
        <div>
            <BtnActions name='Delete' onClick={handleOpen} style={styleBtnDelete}
            />           
            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete Pack?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Do you really want to remove <strong>Pack - {props.packName}</strong>?
                        All cards will be excluded from this course
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button color={"error"} onClick={removePackHandler} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AlertDialogForDeletePack