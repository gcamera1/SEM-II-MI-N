import React, { Component } from 'react';
import { removeStorage } from '../common/storage';

class Sidebar extends Component {

    goTo(route) {
        return this.props.history.push('/' + route);
    }

    isActive(path) {
        return (this.props.location.pathname === path);
    }

    logout() {
        removeStorage('session');
        return this.props.history.push('/');
    }

    render() {
        return (
            <div id="sidebar-wrapper">
                <nav id="spy">
                    <ul className="sidebar-nav nav">
                        <li className="sidebar-brand">
                            <div className="img-avatar-container">
                                <img src={require('../../images/512x512bb.jpg')} className="img-circle img-avatar"
                                     width="304" height="236"/>
                            </div>
                            <div className="text-avatar">
                                <span>Gonzalo Cámera</span>
                            </div>
                        </li>
                        <li>
                            <a onClick={() => this.goTo('home')}>
                                <span className="fa fa-home solo"/><span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => this.goTo('sign-up')}>
                                <span>Sign UP</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => this.logout()}>
                                <span>Cerrar Sesión</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidebar;
