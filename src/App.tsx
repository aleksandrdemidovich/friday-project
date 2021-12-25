import React, {useEffect} from 'react';
import './App.css';
import Routes from "./pages/Routes";
import {HashRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {initializingTC} from "./redux/authReducer";
import HeaderMain from './HeaderMain/HeaderMain';




function App() {

    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(initializingTC())
    })


return (        
        <div className="wrapper">            
            <HeaderMain/>  
            <HashRouter>  
            <Routes/>
            </HashRouter>
        </div>  
            
    );
}

export default App;
