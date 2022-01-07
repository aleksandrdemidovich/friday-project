import s from "./CardsList.module.css"
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from "../../redux/store";
import {
    CardType,
    PackType,
    requestCards,
    setCardsPage,
    setCardsPageCount, setSearchCardName,
} from "../../redux/cardPacksReducer";
import {Preloader} from "../../components/common/Preloader/Preloader";
import {Button} from "@mui/material";
import {formattingDate} from "../../utils/formattingDate";
import {useHistory} from "react-router-dom";
import {PATH} from "../Routes";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import AlertDialogForNewValue from "../PacksList/AlertDialogForNewValue";
import AlertDialogForEditValue from "../PacksList/AlertDialogForEditValue";
import AlertDialogForDeleteValue from "../PacksList/AlertDialogForDeleteValue";
import SelectLabels from "../PacksList/Select/Select";
import UsePagination from "../PacksList/Pagination/UsePagination";
import MainRating from "./Rating/Rating";
import BtnActions from "../PacksList/BtnActions/BtnActions";
import {styleBtnDelete, styleBtnEdit} from "../PacksList/PacksList";


export const CardsList = () => {



    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state: AppStateType) => state.auth.isLoggedIn)
    const appStatus = useSelector((state: AppStateType) => state.app.status)
    const page = useSelector((state: AppStateType) => state.cardPacks.currentCards.page)
    const currentPackName = useSelector((state: AppStateType) => state.cardPacks.currentPackName)
    const pageCount = useSelector((state: AppStateType) => state.cardPacks.currentCards.pageCount)
    const totalCount = useSelector((state: AppStateType) => state.cardPacks.currentCards.cardsTotalCount)
    const dataCardsList = useSelector((state: AppStateType) => state.cardPacks.currentCards.cards);
    const currentPackId = useSelector((state: AppStateType) => state.cardPacks.currentCardsPackId);
    const cardUserID = useSelector((state: AppStateType) => state.cardPacks.currentCards.packUserId);
    const sortCards = useSelector((state: AppStateType) => state.cardPacks.currentCards.sortCards);
    const idAuthorizedUser = useSelector<AppStateType, string>(state => state.auth.user?._id!);
    const cardName = useSelector((state: AppStateType) => state.cardPacks.currentCards.cardName);



    const [openAlertDialogForDeletePack, setOpenAlertDialogForDeletePack] = React.useState<CardType | null>(null);
    const [openAlertDialogForEditPack, setOpenAlertDialogForEditPack] = React.useState<CardType | null>(null);
    const [openAlertDialogForNewPack, setOpenAlertDialogForNewPack] = React.useState(false);

    const [searchCardsName, setSearchCardsName] = React.useState('');


    const handleOpenDelete = (card: CardType) => {
        setOpenAlertDialogForDeletePack(card)
    }
    const handleOpenEdit = (card: CardType) => {
        setOpenAlertDialogForEditPack(card)
    }


    let history = useHistory();

    useEffect(() => {

        if (!isLoggedIn) {
            history.push(PATH.LOGIN)
        }
        isLoggedIn && dispatch(requestCards())
    }, [page, pageCount, currentPackId, sortCards, isLoggedIn, cardName])




    const onChangePage = (value: number) => {
        dispatch(setCardsPage({page: value}))
    }
    const onChangeCardsCountPerPage = (value: string) => {
        dispatch(setCardsPageCount({pageCount: +value}))
    }

    useEffect(() => {
        const handler = setTimeout(() => {
            dispatch(setSearchCardName({currentCardName: searchCardsName}))
        }, 1000)
        return () => {
            clearTimeout(handler);
            dispatch(setSearchCardName({currentCardName: ''}))
        }
    }, [searchCardsName])
    const searchCardNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchCardsName(e.currentTarget.value)
    }




    return (
        <div className={s.cardsList} >
            {appStatus === 'loading' && <Preloader/>}
            <div>
                <div className={s.titleBox}>
                    <Button className={s.rowBtn} style={{transform: 'translate(-15px)'}}
                            variant={"text"}
                            color={"inherit"}
                            startIcon={<ArrowBackOutlinedIcon/>}
                            onClick={() => {
                                history.goBack()
                            }}>{currentPackName}</Button>
                </div>
                <div className={s.searchBox}>
                    <input className={s.search} type={"text"} value={searchCardsName} onChange={searchCardNameHandler} placeholder={'search'}/>
                    {idAuthorizedUser === cardUserID && <AlertDialogForNewValue open={openAlertDialogForNewPack}
                                             setOpenAlertDialogForNewPack={setOpenAlertDialogForNewPack}
                                             alertTitle={"Add new card?"}
                                             buttonName={"Add new card"}
                                             inputLabel={"Card name"}
                                             type={"card"}/>}
                </div>
                {dataCardsList.length ?
                <div>
                    <table className={s.table}>
                        <thead className={s.tableHeader}>
                        <tr className={s.tr}>
                            <th className={s.th}>Question</th>
                            <th className={s.th}>Answer</th>
                            <th className={s.th}>Last updated</th>
                            <th className={s.th}>Grade</th>
                            {idAuthorizedUser === cardUserID &&<th className={s.th}>Actions</th>}
                        </tr>
                        </thead>
            <div className={s.scrollTableBody}>
                        <tbody>
                        {dataCardsList.map(card => <tr className={s.tr} key={card._id}>
                            <td className={s.td}>{card.question}</td>
                            <td className={s.td}>{card.answer}</td>
                            <td className={s.td}>{formattingDate(card.updated)}</td>
                            <td className={s.td}><MainRating rating={card.grade}/></td>
                            {idAuthorizedUser === card.user_id &&<td className={s.td}>
                                <div className={s.btnBox} key={card._id}>
                                    {idAuthorizedUser === card.user_id &&
                                    <>
                                        <BtnActions name='Delete' onClick={() => handleOpenDelete(card)}
                                                    style={styleBtnDelete}/>
                                        <BtnActions name='Edit' onClick={() => handleOpenEdit(card)}
                                                    style={styleBtnEdit}/>
                                    </>
                                    }
                                </div>
                            </td>}
                        </tr>)}

                        {openAlertDialogForDeletePack &&
                        <AlertDialogForDeleteValue packName={openAlertDialogForDeletePack.question}
                                                   packId={openAlertDialogForDeletePack._id}
                                                   open={!!openAlertDialogForDeletePack}
                                                   setOpenAlertDialogForDeletePack={setOpenAlertDialogForDeletePack}
                                                   alertTitle={"Delete Card?"}
                                                   type={"card"}/>}
                        {openAlertDialogForEditPack &&
                        <AlertDialogForEditValue packName={openAlertDialogForEditPack.question}
                                                 answer = {openAlertDialogForEditPack.answer}
                                                 open={!!openAlertDialogForEditPack}
                                                 setOpenAlertDialogForEditPack={setOpenAlertDialogForEditPack}
                                                 packId={openAlertDialogForEditPack._id}
                                                 alertTitle={"Change Card info?"}
                                                 type={"card"}
                                                 inputLabel={"Question"}/>}

                        </tbody>
                    </div>
                    </table>
                </div> : <p className={s.centerText}> This pack is empty. Click add new card to fill this pack</p>}
                {dataCardsList.length ? <div className={s.contentBottom}>
                    <UsePagination count={Math.ceil(totalCount / pageCount)} page={page} onChange={onChangePage}/>
                    <div className={s.choiceCard}>
                        <span>Show</span>
                        <SelectLabels value={pageCount}
                                      onChange={onChangeCardsCountPerPage}/>
                        <span>Cards per Page</span>
                    </div>
                </div>: <></>}
            </div>
        </div>
    )
}