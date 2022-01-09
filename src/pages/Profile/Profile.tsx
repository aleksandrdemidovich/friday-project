import s from "./Profile.module.css";
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Preloader} from "../../components/common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {PATH} from "../Routes";
import {IUser, logoutTC, updateUserProfile} from "../../redux/authReducer";
import {AppStatusType} from "../../redux/app-reducer";
import {Button, Slider, ThemeProvider} from "@mui/material";
import {
    requestCardPack, setMinMaxCardsCount, setUserId
} from "../../redux/cardPacksReducer";
import {theme} from "../PacksList/PacksList";
import Subtitle from "../../components/common/subtitle/Subtitle";
import TableMain from "../../components/common/TableMain/TableMain";



function Profile() {

    const user = useSelector<AppStateType, IUser | null>(state => state.auth.user)
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.auth.isLoggedIn)
    const status = useSelector<AppStateType, AppStatusType>(state => state.app.status)
    const idAuthorizedUser = useSelector<AppStateType, string>(state => state.auth.user?._id!);
    const min = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.min)
    const max = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.max)
    const packName = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.packName)
    const sortPacks = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.sortPacks)
    const dataPacksList = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.cardPacks);


    //local state for input / range

    const [value, setValue] = React.useState<number[]>([min, max]);
    const [editMode, setEditMode] = React.useState(false);

    const [userName, setUserName] = React.useState(user?.name);
    const [userAvatar, setUserAvatar] = React.useState(user?.avatar);
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutTC())
    }

    const editProfile = () => {
        dispatch(updateUserProfile(userAvatar as string, userName as string))
        setEditMode(!editMode)
    }

    useEffect(() => {
        dispatch(setUserId({user_id: idAuthorizedUser}))
        dispatch(requestCardPack())
        return () => {
            dispatch(setUserId({user_id: ''}))
            dispatch(setMinMaxCardsCount({range: [0, 100]}))
        }
    }, [packName, min, max,sortPacks])



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

    const changeUserNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.currentTarget.value)
    }
    const changeUserAvatarHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserAvatar(e.currentTarget.value)
    }




    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }


    return (
        <div className={s.profile}>
            <div className={s.contentLeft} >
                {status === 'loading' && <Preloader/>}
                    {
                        user !== null ?
                            <div className={s.userBlock}>
                                <img className={s.userImg} src={user.avatar}
                                    alt='avatar'/>
                                {editMode ?
                                    <>
                                    <span> Name: <input className={s.inputForEditProfile} type={"text"} onChange={changeUserNameHandler} value={userName}/></span>
                                        <span>Avatar link: <input className={s.inputForEditProfile} type={"text"} onChange={changeUserAvatarHandler} value={userAvatar} placeholder={'Link image'}/></span>
                                    </>
                                    : <>
                                        <p className={s.name}>{user.name}</p>
                                        <p className={s.email}>{user.email}</p>
                                    </>}


                                {editMode ?
                                    <Button className={s.btnForEditProfile} variant={"contained"} color={"secondary"} onClick={editProfile}>Save changes</Button>
                                    : <Button variant={"outlined"} color={"primary"} onClick={() => setEditMode(!editMode)}>Edit profile</Button>}
                            </div> : 'No data'
                    }
                    <div className={s.sliderBlock}>
                        <h3 className={s.titleForSlider}>Number of cards</h3>
                        <ThemeProvider theme={theme}>
                            <Slider
                                value={value}
                                onChange={handleChangeRangeCardCount}
                                valueLabelDisplay="on"
                            />
                        </ThemeProvider>
                    </div>
                    <Button onClick={logout} disabled={!isLoggedIn}>Logout</Button>


                </div>
                <div className={s.contentRight} >
                    <Subtitle subtitle='Ma packs list'/>
                    <input className={s.search} type="text" placeholder='Search...'/>
                    <TableMain dataPacksList={dataPacksList}
                            idAuthorizedUser={idAuthorizedUser}/>
                </div>
        </div>
    )
}

export default Profile