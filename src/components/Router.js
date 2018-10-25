import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './login/Login';
import LoginShopper from './login-shopper/LoginShopper';
import SignUp from './sign-up/SignUp';
import Home from './home/Home';
import HomeShopper from './home-shopper/HomeShopper';
import Profile from './profile/Profile';
import Privacy from './privacy/Privacy';
import TermsServices from './terms-services/TermsServices';
import SelectTimeToShop from './select-time-to-shop/SelectTimeToShop';

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/shopper' component={LoginShopper}/>
            <Route exact path='/sign-up' component={SignUp}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/select-time-to-shop' component={SelectTimeToShop}/>
            <Route exact path='/home-shopper' component={HomeShopper}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/privacy' component={Privacy}/>
            <Route exact path='/terms-services' component={TermsServices}/>
        </Switch>
    </main>
);
export default Router