import React, {useState} from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {fetchEditPack} from "../../redux/cardPacksReducer";
import BtnActions from "./BtnActions/BtnActions";

type AlertDialogForDeletePackPropsType = {
    packName: string
    open: boolean
    setOpenAlertDialogForEditPack: (newStateValue: boolean) => void
    packId: string
}

function AlertDialogForEditPack(props: AlertDialogForDeletePackPropsType) {

    const [newPackName, setNewPackName] = useState('')


    const dispatch = useDispatch()


    const packNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPackName(e.currentTarget.value)
    }

    const handleOpen = ( ) => {
        props.setOpenAlertDialogForEditPack(true)

    }
    const handleClose = () => {
        props.setOpenAlertDialogForEditPack(false)
    };
    const editNewPackName = () => {
        dispatch(fetchEditPack({_id: props.packId, name: newPackName}))
        props.setOpenAlertDialogForEditPack(false)
    };

    const styleBtnEdit: any = {    
        color: '#21268F',
        background: '#D7D8EF',        
    }


    return (
        <div>
            <BtnActions name='Edit' onClick={handleOpen} style={styleBtnEdit}
                    />            
            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Change Pack name?"}
                </DialogTitle>
                <DialogContent style={{width:'500px'}}>
                    <DialogContentText id="alert-dialog-description">
                        <TextField id="outlined-basic" onChange={packNameHandler} fullWidth label="New Pack name" variant="standard" />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color={"error"} onClick={handleClose}>Cancel</Button>
                    <Button  onClick={editNewPackName} autoFocus>
                        Edit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AlertDialogForEditPack