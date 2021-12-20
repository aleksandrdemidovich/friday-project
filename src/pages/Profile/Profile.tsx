import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Preloader} from "../../components/common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {PATH} from "../Routes";
import {IUser, logoutTC} from "../../redux/authReducer";
import {AppStatusType} from "../../redux/app-reducer";



function Profile() {

    const user = useSelector<AppStateType, IUser | null>(state => state.auth.user)
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.auth.isLoggedIn)
    const status = useSelector<AppStateType, AppStatusType>(state=>state.app.status)
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutTC())
    }

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (
        <div>
            {/*{loading && <Preloader/>}*/}
            {status === 'loading' && <Preloader/>}
            <div>
                {
                    user !== null ? <div>
                        <img src={user.avatar} style={{width:'250px', height:'250px'}} alt='avatar'/>
                        <p/>
                        Name: {user.name}
                        <p/>
                        E-Mail: {user.email}
                        <p/>
                    </div> : 'No data'
                }
            </div>
            <button onClick={logout} disabled={!isLoggedIn}>Logout</button>
        </div>
    )
}

export default Profile