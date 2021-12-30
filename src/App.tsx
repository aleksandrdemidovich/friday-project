import React, {useEffect} from 'react';
import './App.css';
import Routes from "./pages/Routes";
import {HashRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {initializingTC} from "./redux/authReducer";
import HeaderMain from './HeaderMain/HeaderMain';
import {AppStateType} from "./redux/store";
import {Preloader} from "./components/common/Preloader/Preloader";




function App() {
    const isInitialized = useSelector<AppStateType, boolean>(state=>state.app.isInitialized)
    const isLoggedIn = useSelector<AppStateType, boolean>(state=>state.auth.isLoggedIn)

    const dispatch = useDispatch()

    useEffect( ()=>{
        if (!isLoggedIn) {
            dispatch(initializingTC())
        }
    },[dispatch])

    if (!isInitialized) {
        return <Preloader />
    }


return (        
        <div className="wrapper">            

            <HashRouter>
                <HeaderMain/>
                <Routes/>
            </HashRouter>
        </div>      
    );
}

export default App;
