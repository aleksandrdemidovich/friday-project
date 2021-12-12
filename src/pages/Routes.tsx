import {Redirect, Switch} from "react-router-dom"
import Login from "./Login";
import SignUp from "./SignUP";
import Profile from "./Profile";
import Error404 from "./Error404";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import NewPassword from "./ForgotPassword/NewPassword";
import Test from "./Test";
import {Route} from "react-router-dom";
import React from "react";
import TempHeader from "../temp/TempHeader";
import CheckEmail from "./ForgotPassword/CheckEmail";


export const PATH = {
    LOGIN: '/login',
    SIGN_UP: '/signup',
    PROFILE: '/profile',
    ERROR_404: '/error404',
    FORGOT_PASSWORD: '/forgotpassword',
    NEW_PASSWORD: '/set-new-password/:token',
    CHECK_EMAIL: '/checkemail',
    TEST: '/test',
}


function Routes() {

    return (
        <>
           <TempHeader/>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.SIGN_UP} render={() => <SignUp/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.FORGOT_PASSWORD} render={() => <ForgotPassword/>}/>
                <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword/>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>
                <Route path={PATH.CHECK_EMAIL} render={() => <CheckEmail/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </>
    )
}

export default Routes