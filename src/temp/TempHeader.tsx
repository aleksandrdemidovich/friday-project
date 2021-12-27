import {NavLink} from "react-router-dom"
import React from "react";
import {PATH} from "../pages/Routes";


function TempHeader() {

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
            <NavLink to={PATH.TEST}>Test Page</NavLink>
            <NavLink to={PATH.SIGN_UP}>Sign Up Page</NavLink>
            <NavLink to={PATH.LOGIN}>Login Page</NavLink>
            <NavLink to={PATH.PROFILE}>Profile</NavLink>
            <NavLink to={PATH.NEW_PASSWORD}>New Password Page</NavLink>
            <NavLink to={PATH.FORGOT_PASSWORD}>Forgot Password Page</NavLink>
            <NavLink to={PATH.PACKS_LIST}>Pack List Page</NavLink>
            <NavLink to={PATH.CARDS_LIST}>Cards List Page</NavLink>
            <NavLink to={PATH.ERROR_404}>404 Error Page</NavLink>
        </div>
    )
}

export default TempHeader