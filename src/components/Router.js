import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './login/Login';
import ListadoSolicitudesBH from './listado-solicitudes-bh/ListadoSolicitudesBH';

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/listado-solicitudes-bh' component={ListadoSolicitudesBH}/>
        </Switch>
    </main>
);
export default Router