import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Preloader} from "../../components/common/Preloader/Preloader";
import {Redirect, useHistory} from "react-router-dom";
import {PATH} from "../Routes";
import {IUser, logoutTC, updateUserProfile} from "../../redux/authReducer";
import {AppStatusType} from "../../redux/app-reducer";
import {Button, Slider, ThemeProvider} from "@mui/material";
import s from "../PacksList/PacksList.module.css";
import {
    requestCardPack, setMinMaxCardsCount, setUserId
} from "../../redux/cardPacksReducer";
import {theme} from "../PacksList/PacksList";


function Profile() {

    const user = useSelector<AppStateType, IUser | null>(state => state.auth.user)
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.auth.isLoggedIn)
    const status = useSelector<AppStateType, AppStatusType>(state => state.app.status)


    //--------------------------------
    const idAuthorizedUser = useSelector<AppStateType, string>(state => state.auth.user?._id!);
    const min = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.min)
    const max = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.max)
    const packName = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.packName)
    const sortPacks = useSelector((state: AppStateType) => state.cardPacks.currentCardPacks.sortPacks)


    //local state for input / range

    const [value, setValue] = React.useState<number[]>([min, max]);
    const [editMode, setEditMode] = React.useState(false);


    const [userName, setUserName] = React.useState(user?.name);
    const [userAvatar, setUserAvatar] = React.useState(user?.avatar);


    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutTC())
    }


    useEffect(() => {
        dispatch(setUserId({user_id: idAuthorizedUser}))
        dispatch(requestCardPack())
        return () => {
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


    const editProfile = () => {
        dispatch(updateUserProfile(userAvatar as string, userName as string))
        setEditMode(!editMode)
    }


    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }


    return (
        <div style={{
            width: '70%',
            height: '75vh',
            margin: '100px auto',
            display: 'flex',
            flexDirection: 'row'
        }}>
            {status === 'loading' && <Preloader/>}
            <div style={{display:'flex', flexDirection:'column', width: '30%', backgroundColor: '#D9D9F1', justifyContent:'space-between'}}>
                {
                    user !== null ?
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <img src={user.avatar}
                                style={{width: '150px', height: '150px', borderRadius: '75px'}}
                                alt='avatar'/>
                            {editMode ?
                                <>
                                   <span> Name: <input type={"text"} onChange={changeUserNameHandler} value={userName}/></span>
                                    <span>Avatar link: <input type={"text"} onChange={changeUserAvatarHandler} value={userAvatar} placeholder={'Link image'}/></span>
                                </>
                                : <>
                                    <p>Name: {user.name}</p>
                                    <p>E-Mail: {user.email}</p>
                                </>}


                            {editMode ?
                                <Button variant={"contained"} color={"secondary"} onClick={editProfile}>Save changes</Button>
                                : <Button variant={"outlined"} color={"primary"} onClick={() => setEditMode(!editMode)}>Edit profile</Button>}
                        </div> : 'No data'
                }
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#ECECF9',
                }}>
                    <h3>Number of cards</h3>
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
            <div style={{width: '70%', backgroundColor: 'white'}}>
                <h1>Ma packs list</h1>
                <input className={s.search} type="text" placeholder='Search...'/>



            </div>

        </div>
    )
}

export default Profile