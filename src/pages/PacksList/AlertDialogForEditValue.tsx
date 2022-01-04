import React, {useState} from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Fab, IconButton, Input,
    TextField
} from "@mui/material";
import {useDispatch} from "react-redux";
import {fetchEditCard, fetchEditPack} from "../../redux/cardPacksReducer";
import AddIcon from '@mui/icons-material/Add';


type AlertDialogForDeletePackPropsType = {
    packName: string
    answer?: string
    open: boolean
    setOpenAlertDialogForEditPack: (pack: any) => void
    packId: string
    alertTitle: string
    inputLabel: string
    type: 'pack' | 'card'
}

function AlertDialogForEditValue(props: AlertDialogForDeletePackPropsType) {

    const [newName, setNewName] = useState(props.packName)
    const [newAnswer, setNewAnswer] = useState(props.answer)

    const dispatch = useDispatch()

    const packNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.currentTarget.value)
    }
    const answerHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewAnswer(e.currentTarget.value)
    }

    const handleClose = () => {
        props.setOpenAlertDialogForEditPack(false)
    }
    const editNewPackName = () => {
        if (props.type === 'pack') {
            dispatch(fetchEditPack({_id: props.packId, name: newName}))
            props.setOpenAlertDialogForEditPack(false)
        } else {
            dispatch(fetchEditCard({_id: props.packId, question: newName, answer:newAnswer}))
            props.setOpenAlertDialogForEditPack(false)
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
                <DialogContent style={{width: '500px'}}>
                    <DialogContentText id="alert-dialog-description">
                        {props.type === 'pack'
                            ? <TextField id="outlined-basic" onChange={packNameHandler} value={newName} fullWidth
                                         label={props.inputLabel} variant="standard"/>
                            :
                            <>
                                <TextField id="outlined-basic" onChange={packNameHandler} value={newName} fullWidth
                                           label={props.inputLabel} variant="standard"/>
                                <label htmlFor="icon-button-file">
                                    <Input id="icon-button-file" type="file" style={{display:'none'}}/>
                                    <Button variant="text" startIcon={<AddIcon />}>Attach file</Button>
                                </label>
                                <TextField id="outlined-basic" onChange={answerHandler} value={newAnswer} fullWidth
                                           label={'Answer'} variant="standard"/>
                                <label htmlFor="icon-button-file">
                                    <Input id="icon-button-file" type="file" style={{display:'none'}}/>
                                    <Button variant="text" startIcon={<AddIcon />}>Attach file</Button>
                                </label>
                            </>}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color={"error"} onClick={handleClose}>Cancel</Button>
                    <Button onClick={editNewPackName} autoFocus>
                        Edit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AlertDialogForEditValue