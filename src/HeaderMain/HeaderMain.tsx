import HeaderBtn from "./HeaderBtn/HeaderBtn";
import s from "./HeaderMain.module.css"
import imgPackList from "../assets/images/pack-list.svg"
import imgProfile from "../assets/images/profile.svg"
import {useHistory} from "react-router-dom";
import React from "react";
import {PATH} from "../pages/Routes";



export default function HeaderMain() {

    const history = useHistory();

    let path = history.location.pathname

    const routeChange = (e: any) =>{
        let buttonID = e.target.id
        buttonID === 'packs' ? history.push(PATH.PACKS_LIST) : history.push(PATH.PROFILE)
        console.log(path)
    }




    return (
        <div className={s.headerMain}>
            <div className="container">
                <div className={s.wrapper}>
                    <h1 className={s.title}>It-incubator</h1>
                    <div className={s.btnWrap}>
                        <HeaderBtn isActive={path === PATH.PACKS_LIST} id="packs" onClick={routeChange} name="Packs list" img={imgPackList}/>
                        <HeaderBtn isActive={path === PATH.PROFILE} id="profile" onClick={routeChange} name="Profile" img={imgProfile}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
