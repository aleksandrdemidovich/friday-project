import React, {useEffect} from 'react';
import './App.css';
import Routes from "./pages/Routes";
import {HashRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {initializingTC} from "./pages/Login/loginReducer";



function App() {
    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(initializingTC())
    })


    return (
        <>
        <div className="wrapper">
        <HashRouter>
            <Routes/>
        </HashRouter>
        </div>
        </>
    );
}

export default App;
