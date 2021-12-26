import s from "./PacksList.module.css"

import React, {CSSProperties, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {
    requestCardPack, setCurrentCardsPackID, setCurrentPackName, setMinMaxCardsCount,
    setPacksPage,
    setPacksPageCount, setSearchPacksName, setSortPacks, setUserId
} from "../../redux/cardPacksReducer";
import {AppStateType} from "../../redux/store";
import {formattingDate} from "../../utils/formattingDate";
import {CircularProgress, Pagination, Slider} from "@mui/material";
import AlertDialogForDeleteValue from "./AlertDialogForDeleteValue";
import AlertDialogForEditValue from "./AlertDialogForEditValue";
import AlertDialogForNewValue from "./AlertDialogForNewValue";
import {PATH} from "../Routes";
import {Redirect, useHistory} from "react-router-dom";
import BtnShowCards from "../../components/common/btnShowCards/BtnShowCards";
import Subtitle from "../../components/common/subtitle/Subtitle";
// 


//slider
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UsePagination from "./Pagination/UsePagination";
import SelectLabels from "./Select/Select";
import BtnActions from "./BtnActions/BtnActions";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


function PacksList() {

    //state
    const isLoggedIn = useSelector((state: AppStateType) => state.auth.isLoggedIn)
    const dataPacksList = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.cardPacks);
    const currentPage = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.page);
    const idAuthorizedUser = useSelector<AppStateType, string>(state => state.auth.user?._id!);
    const userIdForRequest = useSelector((state: AppStateType) => state.cardPacks.user_id)
    const appStatus = useSelector((state: AppStateType) => state.app.status)
    const min = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.min)
    const max = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.max)
    const packName = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.packName)
    const page = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.page)
    const pageCount = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.pageCount)
    const totalCount = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.cardPacksTotalCount)
    const sortPacks = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.sortPacks)

    //dialog alerts
    const [openAlertDialogForDeletePack, setOpenAlertDialogForDeletePack] = React.useState(false);
    const [openAlertDialogForEditPack, setOpenAlertDialogForEditPack] = React.useState(false);
    const [openAlertDialogForNewPack, setOpenAlertDialogForNewPack] = React.useState(false);

    //local state for input / range
    const [searchPackName, setSearchPackName] = React.useState('');
    const [value, setValue] = React.useState<number[]>([min, max]);
    const [sort, setSort] = useState(false)

    const dispatch = useDispatch()
    let history = useHistory();


    //for request cardPacks
    useEffect(() => {
        dispatch(requestCardPack())
    }, [userIdForRequest, packName, min, max, page, pageCount, sortPacks])

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
    useEffect(() => {
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
    useEffect(() => {
        const handler = setTimeout(() => {
            dispatch(setMinMaxCardsCount({range: value}))
        }, 1000)
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


    const onClickShowCardsHandle = (id: string, name: string) => {
        dispatch(setCurrentCardsPackID({currentCardsPackId: id}))
        dispatch(setCurrentPackName({currentPackName: name}))
        history.push(PATH.CARDS_LIST)
    }

    const toggleFilter = (type: string) => {
        if(!sort){
            if(type === 'card'){
                dispatch(setSortPacks('0cardsCount'))
            }else {
                dispatch(setSortPacks('0updated'))
            }
            setSort(!sort)
        } else {
            if(type === 'card'){
                dispatch(setSortPacks('1cardsCount'))
            }else {
                dispatch(setSortPacks('1updated'))
            }
            setSort(!sort)
        }
    }


    const style1: CSSProperties = {
        color: '#2D2E46',
        background: '#FFFFFF',
    }

    const style2: CSSProperties = {
        color: '#FFFFFF',
        background: '#9A91C8',
    }

    const styleBtnLearn: CSSProperties = {
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
                    <BtnShowCards name='My' onClick={fetchMyPacksCards} style={style1}/>
                    <BtnShowCards name='All' onClick={fetchAllPacksCards} style={style2}/>
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
            
            <div className={s.contentRight}>
                <Subtitle subtitle='Packs list'/>
                <div className={s.contentRightTop}>
                    <input className={s.search} type="text" placeholder='Search...' value={searchPackName}
                           onChange={searchPackNameHandler}/>
                    <AlertDialogForNewValue open={openAlertDialogForNewPack}
                                            setOpenAlertDialogForNewPack={setOpenAlertDialogForNewPack}
                                            alertTitle={"Add new pack?"}
                                            buttonName={"Add new pack"}
                                            inputLabel={"Name pack"}
                                            type={"pack"}/>
                </div>

                {appStatus === 'loading' ?
                    <CircularProgress style={{position: 'absolute', right: '50%', top: '300px'}}/>
                    : <>
                        <table className={s.table}>
                            <thead className={s.tableHeader}>
                            <tr className={s.tr}>
                                <th className={s.th}>Name</th>
                                <th className={s.th} onClick={() => toggleFilter('card')}>Cards{sort ? <ArrowDropDownIcon/> : <ArrowDropUpIcon/>}</th>
                                <th className={s.th} onClick={() => toggleFilter('updated')}>Last updated{sort ? <ArrowDropDownIcon/> : <ArrowDropUpIcon/>}</th>
                                <th className={s.th}>Created by</th>
                                <th className={s.th}>Actions</th>
                            </tr>
                            </thead>

                            <tbody>
                            {dataPacksList.map(pack => <tr className={s.tr} key={pack._id}>
                                <td className={s.td} key={pack._id}>{pack.name}</td>
                                <td className={s.td} key={pack._id}>{pack.cardsCount}</td>
                                <td className={s.td} key={pack._id}>{formattingDate(pack.updated)}</td>
                                <td className={s.td} key={pack._id}>{pack.user_name}</td>
                                <td className={s.td} key={pack._id}>
                                    <div className={s.btnBox} key={pack._id}>
                                        {idAuthorizedUser === pack.user_id &&
                                        <>
                                            <AlertDialogForDeleteValue packName={pack.name}
                                                                       key={pack._id}
                                                                       packId={pack._id}
                                                                       open={openAlertDialogForDeletePack}
                                                                       setOpenAlertDialogForDeletePack={setOpenAlertDialogForDeletePack}
                                                                       alertTitle={"Delete Pack?"}
                                                                       type={"pack"}/>
                                            <AlertDialogForEditValue packName={pack.name}
                                                                     open={openAlertDialogForEditPack}
                                                                     setOpenAlertDialogForEditPack={setOpenAlertDialogForEditPack}
                                                                     packId={pack._id}
                                                                     alertTitle={"Change Pack name?"}
                                                                     type={"pack"}
                                                                     inputLabel={"New Pack name"}/>
                                        </>}
                                        <BtnActions name='Learn' style={styleBtnLearn}
                                                    onClick={() => onClickShowCardsHandle(pack._id, pack.name)}/>
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