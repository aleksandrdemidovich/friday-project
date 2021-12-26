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
// 

import BtnActions from "./BtnActions/BtnActions";
//slider
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UsePagination from "./Pagination/UsePagination";
import SelectLabels from "./Select/Select";


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

    //btn my/all
    const style1: any = {    
        color: '#2D2E46',
        background: '#FFFFFF',        
    }

    const style2: any = {    
        color: '#FFFFFF',
        background: '#9A91C8',       
    }

     //btn Learn
    const styleBtnLearn: any = {    
        color: '#21268F',
        background: '#D7D8EF',        
    }

    //slider

    const UseSlider = styled(Slider)({
        color: '#21268F',
        height: 5,
        '& .MuiSlider-track': {
          border: 'none',
        },
        '& .MuiSlider-thumb': {
          height: 16,
          width: 16,
          backgroundColor: '#fff',
          border: '5px solid currentColor',
          '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
          },
          '&:before': {
            display: 'none',
          },
        },
        '& .MuiSlider-valueLabel': {
          lineHeight: 1.2,
          fontSize: 12,
          background: 'unset',
          padding: 0,
          width: 32,
          height: 24,
          borderRadius: '3',
         backgroundColor: '#21268F',
         '&:before': { display: 'none'},
        },
      });


    return (
        <div className={s.packsList}>
            <div className={s.contentLeft}>
                <h3 className={s.titleForButtons}>Show pack cards</h3>
                <div className={s.btnWrap}>
                    <BtnShowCards name='My' onClick={fetchMyPacksCards} style={style1}
                    />
                    <BtnShowCards  name='All' onClick={fetchAllPacksCards} style={style2}
                    />                
                </div>
                <h3 className={s.titleForSlider}>Number of cards</h3>
                <div className={s.sliderWrap}>

                    {/* <Slider 
                        value={value}
                        onChange={handleChangeRangeCardCount}
                        valueLabelDisplay="on"                        
                    /> */}

                    <UseSlider
                        max={150}                        
                        value={value}
                        onChange={handleChangeRangeCardCount}
                        valueLabelDisplay="on"       
                    />


            </div>
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
                        <table className={s.table}>
                            <thead className={s.tableHeader}>
                                <tr className={s.tr}>
                                    <th className={s.th}>Name</th>
                                    <th className={s.th}>Cards</th>
                                    <th className={s.th}>Last updated</th>
                                    <th className={s.th}>Created by</th>
                                    <th className={s.th}>Actions</th>
                                </tr>
                            </thead>

                            <tbody >                          
                                {dataCardsList.map(pack => <tr className={s.tr} key={pack._id}>
                                    <td className={s.td}>{pack.name}</td>
                                    <td className={s.td}>{pack.cardsCount}</td>
                                    <td className={s.td} >{formattingDate(pack.updated)}</td>
                                    <td className={s.td}>{pack.user_name}</td>
                                    <td className={s.td}>
                                        <div className={s.btnBox}>
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
                                            <BtnActions name='Learn' style={styleBtnLearn} onClick = {()=>{}}/>
                                        </div>
                                    </td>
                                    
                                </tr>)}
                            </tbody>
                        </table>

                        <div className={s.contentRightBottom}>


                            {/* <Pagination className={s.pagination} count={Math.ceil(totalCount / pageCount)} color={"primary"} page={currentPage} onChange={onChangePage} shape="rounded"/> */}

                            <UsePagination/>


                            <div className={s.choiceCard}>
                                <span>Show</span>
                                {/* <select value={pageCount} onChange={(e) => onChangeCardsCountPerPage(e.currentTarget.value)}>
                                <option value='5'>5</option>
                                <option value='10'>10</option>
                                <option value='15'>15</option>
                                <option value='20'>20</option>
                                <option value='25'>25</option>
                                </select>  */}


                            <SelectLabels/>

                            
                                <span>Cards per Page</span>                               
                            </div>
                        </div>
                    </>}
            </div>
        </div>
    )
}


export default PacksList