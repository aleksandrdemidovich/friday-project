import React, {useState} from 'react'
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
import {addNewPack} from "../../redux/cardPacksReducer";
import CloseIcon from '@mui/icons-material/Close';


type AlertDialogForDeletePackPropsType = {
    open: boolean
    setOpenAlertDialogForNewPack: (newStateValue: boolean) => void
}

function AlertDialogForNewPack(props: AlertDialogForDeletePackPropsType) {

    const [packName, setPackName] = useState('')


    const dispatch = useDispatch()


    const packNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPackName(e.currentTarget.value)
    }

    const handleOpen = ( ) => {
        props.setOpenAlertDialogForNewPack(true)

    }
    const handleClose = () => {
        props.setOpenAlertDialogForNewPack(false)
    };
    const editNewPackName = () => {
        dispatch(addNewPack(packName))
        props.setOpenAlertDialogForNewPack(false)
    };


    return (
        <div>
            <button style={{width: '100px', color: 'blue'}} onClick={handleOpen}>Add new pack</button>
            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Add new pack?"}
                    <IconButton onClick={handleClose} style={{float:'right'}}>
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>
                <DialogContent style={{width:'500px'}}>
                    <DialogContentText id="alert-dialog-description">
                        <TextField id="outlined-basic" onChange={packNameHandler} fullWidth label="Name pack" variant="standard" />
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

export default AlertDialogForNewPack