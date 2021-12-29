import HeaderBtn from "./HeaderBtn/HeaderBtn";
import s from "./HeaderMain.module.css"
import imgPackList from "../assets/images/pack-list.svg"
import imgProfile from "../assets/images/profile.svg"
import {useHistory, useLocation} from "react-router-dom";
import React from "react";
import {PATH} from "../pages/Routes";



export default function HeaderMain() {

    const history = useHistory();
    const location = useLocation();

    let path = location.pathname


    const routeChange = (e: any) =>{
        let buttonID = e.target.id
        buttonID === 'packs' ? history.push(PATH.PACKS_LIST) : history.push(PATH.PROFILE)
    }




    return (
        <div className={s.headerMain}>
            <div className="container">
                <div className={s.wrapper}>
                    <h1 className={s.title}>It-incubator</h1>
                    <div className={s.btnWrap}>
                        <HeaderBtn isActive={path === '/packs-list'} id="packs" onClick={routeChange} name="Packs list" img={imgPackList}/>
                        <HeaderBtn isActive={path === '/profile'} id="profile" onClick={routeChange} name="Profile" img={imgProfile}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
