import {Redirect, Switch} from "react-router-dom"
import SignUp from "./signUp/SignUP";
import Profile from "./Profile/Profile";
import Error404 from "./Error404";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import NewPassword from "./ForgotPassword/NewPassword";
import Test from "./Test";
import {Route} from "react-router-dom";
import React from "react";
import TempHeader from "../temp/TempHeader";
import {LoginPage} from "./Login/LoginPage";
import CheckEmail from "./ForgotPassword/CheckEmail";
import PacksList from "./PacksList/PacksList";
import {CardsList} from "./CardsList/CardsList";



export const PATH = {
    LOGIN: '/login',
    SIGN_UP: '/signup',
    PROFILE: '/profile',
    ERROR_404: '/error404',
    FORGOT_PASSWORD: '/forgotpassword',
    NEW_PASSWORD: '/set-new-password/:token',
    CHECK_EMAIL: '/checkemail',
    TEST: '/test',
    PACKS_LIST:'/packs-list',
    CARDS_LIST:'/cards-list'
}


function Routes() {

    return (
        <>
            <TempHeader/>
                <Switch>
                    <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>
                    <Route path={PATH.LOGIN} render={() => <LoginPage/>}/>
                    <Route path={PATH.SIGN_UP} render={() => <SignUp/>}/>
                    <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                    <Route path={PATH.FORGOT_PASSWORD} render={() => <ForgotPassword/>}/>
                    <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword/>}/>
                    <Route path={PATH.TEST} render={() => <Test/>}/>
                    <Route path={PATH.CHECK_EMAIL} render={() => <CheckEmail/>}/>
                    <Route path={PATH.PACKS_LIST} render={() => <PacksList/>}/>
                    <Route path={PATH.CARDS_LIST} render={() => <CardsList/>}/>
                    <Route render={() => <Error404/>}/>
                </Switch>
        </>
    )
}

export default Routes;