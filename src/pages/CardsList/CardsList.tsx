import s from "./CardsList.module.css"
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from "../../redux/store";
import {
    requestCards,
    setCardsPage,
    setCardsPageCount,
} from "../../redux/cardPacksReducer";
import {Preloader} from "../../components/common/Preloader/Preloader";
import {Button, Pagination} from "@mui/material";
import {formattingDate} from "../../utils/formattingDate";
import {useHistory} from "react-router-dom";
import {PATH} from "../Routes";
// import s from "../PacksList/PacksList.module.css"
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import AlertDialogForNewValue from "../PacksList/AlertDialogForNewValue";
import AlertDialogForEditValue from "../PacksList/AlertDialogForEditValue";
import AlertDialogForDeleteValue from "../PacksList/AlertDialogForDeleteValue";
import UsePagination from "../PacksList/Pagination/UsePagination";
import SelectLabels from "../PacksList/Select/Select";


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
    const cardUserID = useSelector((state: AppStateType) => state.cardPacks.user_id);
    const sortCards = useSelector((state: AppStateType) => state.cardPacks.currentCards.sortCards);
    const idAuthorizedUser = useSelector<AppStateType, string>(state => state.auth.user?._id!);


    const [openAlertDialogForDeletePack, setOpenAlertDialogForDeletePack] = React.useState(false);
    const [openAlertDialogForEditPack, setOpenAlertDialogForEditPack] = React.useState(false);
    const [openAlertDialogForNewPack, setOpenAlertDialogForNewPack] = React.useState(false);


    let history = useHistory();

    useEffect(() => {
        if (!isLoggedIn) {
            history.push(PATH.LOGIN)
        }
        isLoggedIn && dispatch(requestCards())
        return () => {
            dispatch(requestCards())
        }
    }, [page, pageCount, currentPackId, sortCards, isLoggedIn])




    const onChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setCardsPage({page: value}))
    }
    const onChangeCardsCountPerPage = (value: string) => {
        dispatch(setCardsPageCount({pageCount: +value}))
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
                    <input className={s.search} type={"text"} placeholder={'search'}/>
                    <AlertDialogForNewValue open={openAlertDialogForNewPack}
                                            setOpenAlertDialogForNewPack={setOpenAlertDialogForNewPack}
                                            alertTitle={"Add new card?"}
                                            buttonName={"Add new card"}
                                            inputLabel={"Card name"}
                                            type={"card"}/>
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

                        <tbody>
                        {dataCardsList.map(card => <tr className={s.tr} key={card._id}>
                            <td className={s.td} key={card._id}>{card.question}</td>
                            <td className={s.td} key={card._id}>{card.answer}</td>
                            <td className={s.td} key={card._id}>{formattingDate(card.updated)}</td>
                            <td className={s.td} key={card._id}>{card.grade}</td>
                            {idAuthorizedUser === card.user_id &&<td className={s.td} key={card._id}>
                                <div className={s.btnBox} key={card._id}>
                                    <AlertDialogForDeleteValue packName={card.question}
                                                               key={card._id}
                                                               packId={card._id}
                                                               open={openAlertDialogForDeletePack}
                                                               setOpenAlertDialogForDeletePack={setOpenAlertDialogForDeletePack}
                                                               alertTitle={"Delete Card?"}
                                                               type={"card"}/>
                                    <AlertDialogForEditValue packName={card.question}
                                                             open={openAlertDialogForEditPack}
                                                             setOpenAlertDialogForEditPack={setOpenAlertDialogForEditPack}
                                                             packId={card._id}
                                                             alertTitle={"Change Card info?"}
                                                             type={"card"}
                                                             inputLabel={"New Card name"}/>
                                </div>
                            </td>}
                        </tr>)}
                        </tbody>
                    </table>
                </div> : <p className={s.centerText}> This pack is empty. Click add new card to fill this pack</p>}
                {dataCardsList.length ? <div className={s.contentRightBottom}>
                    <div className={s.contentBottom}> 
                        {/* <Pagination className={s.pagination}
                                    count={Math.ceil(totalCount / pageCount)}
                                    color={"primary"} page={page}
                                    onChange={onChangePage}
                                    shape="rounded"/> */}

                                    <UsePagination/>

                        <div className={s.choiceCard}>
                            <span>Show</span>
                            {/* <select value={pageCount} onChange={(e) => onChangeCardsCountPerPage(e.currentTarget.value)}>
                                <option value='5'>5</option>
                                <option value='10'>10</option>
                                <option value='15'>15</option>
                                <option value='20'>20</option>
                                <option value='25'>25</option>
                            </select> */}


<SelectLabels/>

                            <span>Cards per Page</span>
                        </div>
                    </div>
                </div>: <></>}
            </div>
        </div>
    )
}