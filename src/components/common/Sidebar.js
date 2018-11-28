import React, { Component } from 'react';
import { removeStorage, getStorage } from '../common/storage';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(getStorage('session'))
        }
    }

    goTo(route) {
        return this.props.history.push('/' + route);
    }

    goToWithProps(route, props) {
        const sendProps = {
            rol: props
        };
        return this.props.history.push('/' + route, sendProps);
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
        const { user: { nombre } } = this.state;
        return (
            <div id="sidebar-wrapper">
                <nav id="spy">
                    <ul className="sidebar-nav nav">
                        <li className="sidebar-brand">
                            <div className="img-avatar-container">
                                <img src={require('../../images/512x512bb.jpg')}
                                    className="img-circle img-avatar" />
                            </div>
                            <div className="text-avatar">
                                <span>{nombre}</span>
                            </div>
                        </li>
                        {this.props.rol === 'user' &&
                            <li>
                                <a onClick={() => this.goTo('home')}
                                    className={this.isActive('/home') ? 'sidebar-active' : ''}>
                                    <span>Inicio</span>
                                </a>
                            </li>
                        }
                        {this.props.rol === 'shopper' &&
                            <li>
                                <a onClick={() => this.goTo('home-shopper')}
                                    className={this.isActive('/home-shopper') ? 'sidebar-active' : ''}>
                                    <span>Inicio</span>
                                </a>
                            </li>
                        }
                        {this.props.rol === 'user' &&
                            <li>
                                <a onClick={() => this.goTo('profile')}
                                    className={this.isActive('/profile') ? 'sidebar-active' : ''}>
                                    <span>Tu perfil</span>
                                </a>
                            </li>
                        }
                        <li>
                            <a onClick={() => this.goToWithProps('terms-services', this.props.rol)}
                                className={this.isActive('/terms-services') ? 'sidebar-active' : ''}>
                                <span>Términos y condiciones</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => this.goToWithProps('privacy', this.props.rol)}
                                className={this.isActive('/privacy') ? 'sidebar-active' : ''}>
                                <span>Políticas de privacidad</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => this.goToWithProps('contact', this.props.rol)}
                                className={this.isActive('/contact') ? 'sidebar-active' : ''}>
                                <span>Contacto</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => this.logout()}>
                                <span>Cerrar Sesión</span>
                            </a>
                        </li>
                        {this.props.rol === 'user' &&
                            <li>
                                <div className='social-container'>
                                    <span className='social-text'>Seguinos en:</span>
                                    <span className='social-img-cont'>
                                        <a href="https://www.facebook.com/vestime.app.9"
                                            target="_blank" className='social-img'><img
                                                src={require('../../images/Facebook-icon-1.png')} />
                                        </a>
                                        <a href="https://www.instagram.com/vesti.me.app/"
                                            target="_blank" className='social-img'><img
                                                src={require('../../images/insta.png')} />
                                        </a>
                                    </span>
                                </div>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidebar;
