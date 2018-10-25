import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './login/Login';
import LoginShopper from './login-shopper/LoginShopper';
import SignUp from './sign-up/SignUp';
import Home from './home/Home';
import HomeShopper from './home-shopper/HomeShopper';

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/shopper' component={LoginShopper}/>
            <Route exact path='/sign-up' component={SignUp}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/home-shopper' component={HomeShopper}/>
        </Switch>
    </main>
);
export default Router