import s from "./PacksList.module.css"

import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {
    requestCardPack, setMinMaxCardsCount,
    setPacksPage,
    setPacksPageCount, setSearchPacksName, setUserId
} from "../../redux/cardPacksReducer";
import {AppStateType} from "../../redux/store";
import {formattingDate} from "../../utils/formattingDate";
import {CircularProgress, Pagination, Slider} from "@mui/material";
import AlertDialogForDeletePack from "./AlertDialogForDeletePack";
import AlertDialogForEditPack from "./AlertDialogForEditPack";
import AlertDialogForNewPack from "./AlertDialogForNewPack";
import {PATH} from "../Routes";
import {Redirect} from "react-router-dom";
import BtnShowCards from "../../components/common/btnShowCards/BtnShowCards";
import { ServerStreamFileResponseOptionsWithError } from "http2";
import Subtitle from "../../components/common/subtitle/Subtitle";


function PacksList() {

    //state
    const isLoggedIn = useSelector((state: AppStateType) => state.auth.isLoggedIn)
    const dataCardsList = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.cardPacks);
    const currentPage = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.page);
    const idAuthorizedUser = useSelector<AppStateType, string>(state => state.auth.user?._id!);
    const userIdForRequest = useSelector((state: AppStateType) => state.cardPacks.user_id)
    const appStatus = useSelector((state: AppStateType) => state.app.status)
    const minCardsCount = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.minCardsCount)
    const maxCardsCount = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.maxCardsCount)
    const packName = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.packName)
    const page = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.page)
    const pageCount = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.pageCount)
    const totalCount = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.cardPacksTotalCount)

    //dialog alerts
    const [openAlertDialogForDeletePack, setOpenAlertDialogForDeletePack] = React.useState(false);
    const [openAlertDialogForEditPack, setOpenAlertDialogForEditPack] = React.useState(false);
    const [openAlertDialogForNewPack, setOpenAlertDialogForNewPack] = React.useState(false);

    //local state for input / range
    const [searchPackName, setSearchPackName] = React.useState('');
    const [value, setValue] = React.useState<number[]>([minCardsCount, maxCardsCount]);

    const dispatch = useDispatch()



    //for request cardPacks
    useEffect(() => {
        dispatch(requestCardPack())
    }, [userIdForRequest, packName, minCardsCount, maxCardsCount, page, pageCount])

    //paginator
    const onChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPacksPage({page: value}))
    }
    const onChangeCardsCountPerPage = (value: string) => {
        dispatch(setPacksPageCount({pageCount: +value}))
    }

    //fetch all or you packs
    const fetchMyPacksCards = () => {
        dispatch(setUserId({user_id: idAuthorizedUser}))
    }
    const fetchAllPacksCards = () => {
        dispatch(setUserId({user_id: ''}))
    }

    //for request cardPacks with name from input
    useEffect(()=>{
        const handler = setTimeout(() => {
            dispatch(setSearchPacksName({packName: searchPackName}))
        }, 1000)
        return () => {
            clearTimeout(handler);
        }
    }, [searchPackName])
    const searchPackNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchPackName(e.currentTarget.value)
    }



    //for request cardPacks with range
    useEffect(()=>{
        const handler = setTimeout(() => {
            dispatch(setMinMaxCardsCount({range: value}))
            dispatch(requestCardPack())
        }, 2000)
        return () => {
            clearTimeout(handler);
        }
    }, [value])

    const handleChangeRangeCardCount = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    }

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }

    
    const style1: any = {    
        color: '#2D2E46',
        background: '#FFFFFF',        
    }

    const style2: any = {    
        color: '#FFFFFF',
        background: '#9A91C8',       
    }
    

    return (
        <div className={s.packsList} >
            <div className={s.contentLeft} >
                <h3 className={s.titleLeft}>Show pack cards</h3>
                <div className={s.btnWrap}>
                    <BtnShowCards name='My' onClick={fetchMyPacksCards} style={style1}
                    />
                    <BtnShowCards  name='All' onClick={fetchAllPacksCards} style={style2}
                    />                
                </div>
                <h3 className={s.titleLeft}>Number of cards</h3>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                {value[0]}<Slider
                    value={value}
                    onChange={handleChangeRangeCardCount}
                    valueLabelDisplay="auto"
                    style={{width:'70%', margin:'0 10px 0 10px'}}
                />{value[1]}</div>
            </div>
            <div className={s.contentRight} >
                <Subtitle subtitle='Packs list'/>
                    <div className={s.contentRightTop}>
                        <input className={s.search} type="text" placeholder='Search...' value={searchPackName} onChange={searchPackNameHandler} />
                        <AlertDialogForNewPack open={openAlertDialogForNewPack}
                                            setOpenAlertDialogForNewPack={setOpenAlertDialogForNewPack}/>
                        {/*<button style={{width: '30%'}} onClick={addNewPackHandler}>Add new pack</button>*/}
                    </div>

                {appStatus === 'loading' ?
                    <CircularProgress style={{position: 'absolute', right: '50%', top: '300px'}}/>
                    : <>
                        <table className={s.table} >
                            <tr className={s.tableHeader}>
                                <td className={s.tableHeaderName}>Name</td>
                                <td className={s.tableHeaderCards}>Cards</td>
                                <td className={s.tableHeaderLast}>Last updated</td>
                                <td className={s.tableHeaderCreated}>Created by</td>
                                <td className={s.tableHeaderActions}>Actions</td>
                            </tr>
                            {dataCardsList.map(pack => <tr key={pack._id} style={{border: '1px solid blue'}}>
                                <td style={{border: '1px solid blue'}}>{pack.name}</td>
                                <td style={{border: '1px solid #7FFFD4'}}>{pack.cardsCount}</td>
                                <td style={{border: '1px solid #8A2BE2'}}>{formattingDate(pack.updated)}</td>
                                <td style={{border: '1px solid #5F9EA0'}}>{pack.user_name}</td>
                                <div style={{
                                    border: '1px solid #5F9EA0',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around'
                                }}>
                                    {idAuthorizedUser === pack.user_id &&
                                    <>
                                        <AlertDialogForDeletePack packName={pack.name}
                                                                key={pack._id}
                                                                packId = {pack._id}
                                                                open={openAlertDialogForDeletePack}
                                                                setOpenAlertDialogForDeletePack={setOpenAlertDialogForDeletePack}/>
                                        <AlertDialogForEditPack packName={pack.name}
                                                                open={openAlertDialogForEditPack}
                                                                setOpenAlertDialogForEditPack={setOpenAlertDialogForEditPack}
                                                                packId={pack._id}/>
                                    </>}
                                    <button style={{width: '70px', color: 'green'}}>Learn</button>
                                </div>
                            </tr>)}
                        </table>

                        <div style={{display: "flex", flexDirection: "row", alignItems:'center'}}>
                            <Pagination count={Math.ceil(totalCount / pageCount)} color={"primary"} page={currentPage} onChange={onChangePage} shape="rounded"/>
                            <p>Show <select value={pageCount} onChange={(e) => onChangeCardsCountPerPage(e.currentTarget.value)}>
                                <option value='5'>5</option>
                                <option value='10'>10</option>
                                <option value='15'>15</option>
                                <option value='20'>20</option>
                                <option value='25'>25</option>
                            </select> Cards per Page
                            </p>

                        </div>
                    </>}

            </div>
        </div>
    )
}


export default PacksList