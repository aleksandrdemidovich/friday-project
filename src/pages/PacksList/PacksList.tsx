import s from "./PacksList.module.css"
import React, {CSSProperties, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {
    PackType,
    requestCardPack, setCurrentCardsPackID, setCurrentPackName, setMinMaxCardsCount,
    setPacksPage,
    setPacksPageCount, setSearchPacksName, setSortPacks, setUserId
} from "../../redux/cardPacksReducer";
import {AppStateType} from "../../redux/store";
import {formattingDate} from "../../utils/formattingDate";
import {CircularProgress, createTheme, Slider, ThemeProvider} from "@mui/material";
import AlertDialogForDeleteValue from "./AlertDialogForDeleteValue";
import AlertDialogForEditValue from "./AlertDialogForEditValue";
import AlertDialogForNewValue from "./AlertDialogForNewValue";
import {PATH} from "../Routes";
import {Redirect, useHistory} from "react-router-dom";
import BtnShowCards from "../../components/common/btnShowCards/BtnShowCards";
import Subtitle from "../../components/common/subtitle/Subtitle";
import UsePagination from "./Pagination/UsePagination";
import SelectLabels from "./Select/Select";
import BtnActions from "./BtnActions/BtnActions";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import TableMain from "../../components/common/TableMain/TableMain.tsx";



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
    const [openAlertDialogForDeletePack, setOpenAlertDialogForDeletePack] = React.useState<PackType | null>(null);
    const [openAlertDialogForEditPack, setOpenAlertDialogForEditPack] = React.useState<PackType | null>(null);
    const [openAlertDialogForNewPack, setOpenAlertDialogForNewPack] = React.useState(false);

    const handleOpenDelete = (pack: PackType) => {
        setOpenAlertDialogForDeletePack(pack)
    }
    const handleOpenEdit = (pack: PackType) => {
        setOpenAlertDialogForEditPack(pack)
    }


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
    const onChangePage = (value: number) => {
        dispatch(setPacksPage({page: value}))
    }
    const onChangePacksCountPerPage = (value: string) => {
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

    const handleChangeRangeCardCount = (event: Event, newValue: number | number[], activeThumb: number) => {
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


    const style1: CSSProperties = {
        color: '#2D2E46',
        background: '#FFFFFF',
    }
    const style2: CSSProperties = {
        color: '#FFFFFF',
        background: '#9A91C8',
    }






    return (
        <div className={s.packsList}>
            <div className={s.contentLeft}>
                <h3 className={s.titleForButtons}>Show pack cards</h3>
                <div className={s.btnWrap}>
                    <BtnShowCards name='My' onClick={fetchMyPacksCards}
                                  style={idAuthorizedUser === userIdForRequest ? style2 : style1}/>
                    <BtnShowCards name='All' onClick={fetchAllPacksCards}
                                  style={idAuthorizedUser === userIdForRequest ? style1 : style2}/>
                </div>
                <h3 className={s.titleForSlider}>Number of cards</h3>
                <div className={s.sliderWrap}>
                    <ThemeProvider theme={theme}>
                        <Slider
                            value={value}
                            onChange={handleChangeRangeCardCount}
                            valueLabelDisplay="on"
                        />
                    </ThemeProvider>
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


                        <div className={s.tableWrap}>

                          <TableMain/>
                            {/* <table className={s.table}>
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
                                    {dataPacksList.map(pack => <tr className={s.tr} key={pack._id}>
                                        <td className={s.td}
                                            onClick={() => onClickShowCardsHandle(pack._id, pack.name)}>{pack.name}</td>
                                        <td className={s.td}>{pack.cardsCount}</td>
                                        <td className={s.td}>{formattingDate(pack.updated)}</td>
                                        <td className={s.td}>{pack.name}</td>
                                        <td className={s.td}>
                                            <div className={s.btnBox}>
                                                {idAuthorizedUser === pack.user_id &&
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
                            </table> */}
                        </div>

                        <div className={s.contentRightBottom}>
                            <UsePagination count={Math.ceil(totalCount / pageCount)} page={currentPage}
                                           onChange={onChangePage}/>
                            <div className={s.choiceCard}>
                                <span>Show</span>
                                <SelectLabels value={pageCount}
                                              onChange={onChangePacksCountPerPage}/>
                                <span>Cards per Page</span>
                            </div>
                        </div>
                    </>}
            </div>
        </div>

    )
}


export default PacksList

export const styleBtnDelete: any = {
    color: '#FFFFFF',
    background: '#F1453D',
}
export const styleBtnEdit: any = {
    color: '#21268F',
    background: '#D7D8EF',
}
export const styleBtnLearn: CSSProperties = {
    color: '#21268F',
    background: '#D7D8EF',
}

export const theme = createTheme({
    components: {
        // Name of the component
        MuiSlider: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
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
                            touchAction: 'pan-x',
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
                        '&:before': {display: 'none'},
                    },
                },
            },
        },
    },
});