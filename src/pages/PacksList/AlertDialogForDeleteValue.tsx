import React from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useDispatch} from "react-redux";
import {CardType, fetchDeleteCard, fetchDeletePack, PackType} from "../../redux/cardPacksReducer";

type AlertDialogForDeletePackPropsType = {
    packName: any
    open: boolean
    setOpenAlertDialogForDeletePack: (pack: any) => void
    packId: string
    alertTitle: string
    type: 'pack' | 'card'
}

function AlertDialogForDeleteValue(props: AlertDialogForDeletePackPropsType) {
    console.log('render')
    const dispatch = useDispatch()


    const handleClose = () => {
        props.setOpenAlertDialogForDeletePack(null)
    }

    const removePackHandler = () => {
        if (props.type === 'pack') {
            dispatch(fetchDeletePack(props.packId))
            props.setOpenAlertDialogForDeletePack(null)
        } else {
            dispatch(fetchDeleteCard(props.packId))
            props.setOpenAlertDialogForDeletePack(null)
        }
    }



    return (
        <div>

            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {props.alertTitle}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {props.type === 'pack'
                            ? <span>Do you really want to remove <strong>Pack - {props.packName}</strong>?
                            All cards will be excluded from this course
                        </span>
                            : <span>
                                Do you really want to remove - <strong>Card - {props.packName}</strong>?
                            </span>}
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

export default AlertDialogForDeleteValue