import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Preloader} from "../../components/common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {PATH} from "../Routes";
import {IUser, logoutTC} from "../../redux/authReducer";



function Profile() {

    const user = useSelector<AppStateType, IUser | null>(state => state.auth.user)
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.auth.isLoggedIn)
    const loading = useSelector<AppStateType, boolean>(state => state.auth.loading)
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutTC())
    }

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (
        <div>
            {loading && <Preloader/>}
            <div>
                {
                    user !== null ? <div>
                        <img src={user.avatar} alt='avatar'/>
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