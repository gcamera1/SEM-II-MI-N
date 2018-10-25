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
        if (this.props.rol === 'user') {
            return this.props.history.push('/');
        } else {
            return this.props.history.push('/shopper');
        }
    }

    render() {
        return (
            <div id="sidebar-wrapper">
                <nav id="spy">
                    <ul className="sidebar-nav nav">
                        <li className="sidebar-brand">
                            <div className="img-avatar-container">
                                <img src={require('../../images/512x512bb.jpg')}
                                     className="img-circle img-avatar"/>
                            </div>
                            <div className="text-avatar">
                                <span>Gonzalo Cámera</span>
                            </div>
                        </li>
                        <li>
                            <a onClick={() => this.goTo('home')}
                               className={this.isActive('/home') ? 'sidebar-active' : ''}>
                                <span>Inicio</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => this.goTo('profile')}
                               className={this.isActive('/profile') ? 'sidebar-active' : ''}>
                                <span>Tu perfil</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => this.goTo('terms-services')}
                               className={this.isActive('/terms-services') ? 'sidebar-active' : ''}>
                                <span>Términos y condiciones</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => this.goTo('privacy')}
                               className={this.isActive('/privacy') ? 'sidebar-active' : ''}>
                                <span>Políticas de privacidad</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => this.logout()}>
                                <span>Cerrar Sesión</span>
                            </a>
                        </li>
                        <li>
                            <div className='social-container'>
                                <span className='social-text'>Seguinos en:</span>
                                <span className='social-img-cont'>
                                    <a href="https://www.facebook.com/ventaderopa.barata.5"
                                       target="_blank" className='social-img'><img
                                        src={require('../../images/Facebook-icon-1.png')}/>
                                    </a>
                                    <a href="https://www.instagram.com/outletropabarata/"
                                       target="_blank" className='social-img'><img
                                        src={require('../../images/insta.png')}/>
                                    </a>
                                </span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidebar;
