import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {IUser, logoutTC} from "../Login/loginReducer";
import {Preloader} from "../Login/Preloader";
import {Redirect} from "react-router-dom";
import {PATH} from "../Routes";


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