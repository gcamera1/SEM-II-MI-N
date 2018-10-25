import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './login/Login';
import SignUp from "./sign-up/SignUp";
import Home from "./home/Home";

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/sign-up' component={SignUp}/>
            <Route exact path='/home' component={Home}/>
        </Switch>
    </main>
);
export default Router