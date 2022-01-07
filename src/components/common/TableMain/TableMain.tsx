// import s from './TableMain.module.css'
import s from './../../../pages/PacksList/PacksList.module.css'
import {formattingDate} from "../../../utils/formattingDate";
import BtnActions from "../../../pages/PacksList/BtnActions/BtnActions";
import {styleBtnDelete, styleBtnEdit, styleBtnLearn} from "../../../pages/PacksList/PacksList";
import AlertDialogForDeleteValue from "../../../pages/PacksList/AlertDialogForDeleteValue";
import AlertDialogForEditValue from "../../../pages/PacksList/AlertDialogForEditValue";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {PackType, setCurrentCardsPackID, setCurrentPackName, setSortPacks} from "../../../redux/cardPacksReducer";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {PATH} from "../../../pages/Routes";
import {useHistory} from "react-router-dom";


type TableMainPropsType = {
    dataPacksList: PackType[]
    idAuthorizedUser: string
}

export default function TableMain(props: TableMainPropsType) {

    const [openAlertDialogForDeletePack, setOpenAlertDialogForDeletePack] = React.useState<PackType | null>(null);
    const [openAlertDialogForEditPack, setOpenAlertDialogForEditPack] = React.useState<PackType | null>(null);
    const [sort, setSort] = useState(false)


    const handleOpenDelete = (pack: PackType) => {
        setOpenAlertDialogForDeletePack(pack)
    }
    const handleOpenEdit = (pack: PackType) => {
        setOpenAlertDialogForEditPack(pack)
    }

    const dispatch = useDispatch()
    let history = useHistory();


    const onClickShowCardsHandle = (id: string, name: string) => {
        dispatch(setCurrentCardsPackID({currentCardsPackId: id}))
        dispatch(setCurrentPackName({currentPackName: name}))
        history.push(PATH.CARDS_LIST)
    }

    const onClickShowLearnPageHandle = (id: string, name: string) => {
        dispatch(setCurrentCardsPackID({currentCardsPackId: id}))
        dispatch(setCurrentPackName({currentPackName: name}))
        history.push(PATH.LEARN_PAGE)
    }

    const toggleFilter = (type: string) => {
        if (!sort) {
            if (type === 'card') {
                dispatch(setSortPacks('0cardsCount'))
            } else {
                dispatch(setSortPacks('0updated'))
            }
            setSort(!sort)
        } else {
            if (type === 'card') {
                dispatch(setSortPacks('1cardsCount'))
            } else {
                dispatch(setSortPacks('1updated'))
            }
            setSort(!sort)
        }
    }

    return (

        <div className={s.tableMain}>
            <table className={s.table}>
                <thead className={s.tableHeader}>
                <tr className={s.tr}>
                    <th className={s.th}>Name</th>
                    <th className={s.th} onClick={() => toggleFilter('card')}>Cards{sort ?
                        <ArrowDropDownIcon/> : <ArrowDropUpIcon/>}</th>
                    <th className={s.th} onClick={() => toggleFilter('updated')}>Last updated{sort ?
                        <ArrowDropDownIcon/> : <ArrowDropUpIcon/>}</th>
                    <th className={s.th}>Created by</th>
                    <th className={s.th}>Actions</th>
                </tr>
                </thead>
                <div className={s.scrollTableBody}>
                <tbody>

                    {props.dataPacksList.map(pack => <tr className={s.tr} key={pack._id}>
                        <td className={s.td}
                            onClick={() => onClickShowCardsHandle(pack._id, pack.name)}>{pack.name}</td>
                        <td className={s.td}>{pack.cardsCount}</td>
                        <td className={s.td}>{formattingDate(pack.updated)}</td>
                        <td className={s.td}>{pack.user_name}</td>
                        <td className={s.td}>
                            <div className={s.btnBox}>
                                {props.idAuthorizedUser === pack.user_id &&
                                <>
                                    <BtnActions name='Delete' onClick={() => handleOpenDelete(pack)}
                                                style={styleBtnDelete}/>
                                    <BtnActions name='Edit' onClick={() => handleOpenEdit(pack)}
                                                style={styleBtnEdit}/>
                                </>
                                }
                                <BtnActions name='Learn' style={styleBtnLearn}
                                            onClick={() => onClickShowLearnPageHandle(pack._id, pack.name)}/>
                            </div>
                        </td>
                    </tr>)}

                    {openAlertDialogForDeletePack &&
                    <AlertDialogForDeleteValue packName={openAlertDialogForDeletePack.name}
                                               packId={openAlertDialogForDeletePack._id}
                                               open={!!openAlertDialogForDeletePack}
                                               setOpenAlertDialogForDeletePack={setOpenAlertDialogForDeletePack}
                                               alertTitle={"Delete Pack?"}
                                               type={"pack"}/>}
                    {openAlertDialogForEditPack &&
                    <AlertDialogForEditValue packName={openAlertDialogForEditPack.name}
                                             open={!!openAlertDialogForEditPack}
                                             setOpenAlertDialogForEditPack={setOpenAlertDialogForEditPack}
                                             packId={openAlertDialogForEditPack._id}
                                             alertTitle={"Change Pack name?"}
                                             type={"pack"}
                                             inputLabel={"New Pack name"}/>}

                </tbody>
                </div>
            </table>

        </div>












        // <div className={s.tableMain}>
        //     <table className={s.table}>
        //         <thead className={s.tableHeader}>
        //         <tr className={s.tr}>
        //             <th className={s.th}>Name</th>
        //             <th className={s.th}>Cards</th>
        //             <th className={s.th}>Last updated</th>
        //             <th className={s.th}>Created by</th>
        //             <th className={s.th}>Actions</th>
        //         </tr>
        //
        //         </thead>
        //             <tbody>
        //                 <div className={s.scrollTableBody}>
        //                     <tr className={s.tr}>
        //                         <td className={s.td}>Pack Name</td>
        //                         <td className={s.td}>4</td>
        //                         <td className={s.td}>18.03.2021</td>
        //                         <td className={s.td}>Ivan Ivanov</td>
        //                         <td className={s.td}>
        //                             <div className={s.btnBox}>
        //                                 <button>Delete</button>
        //                                 <button>Edit</button>
        //                                 <button>Learn</button>
        //                             </div>
        //                         </td>
        //                     </tr>
        //                 </div>
        //             </tbody>
        //     </table>
        // </div>
    );
}