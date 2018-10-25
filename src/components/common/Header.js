import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebar: false
        }
    }

    handleSidebar() {
        let sidebarState = !this.state.sidebar;

        if(this.state.sidebar) {
            let element = document.getElementById('wrapper');
            element.classList.add('toggled');
        } else {
            let element = document.getElementById('wrapper');
            element.classList.remove('toggled');
        }

        this.setState({'sidebar': sidebarState});


    }

    goToHome() {
        const currentRouteName = this.props.location.pathname;
        if(this.props.rol === 'user') {
            if(currentRouteName === '/' || currentRouteName === '/sign-up') {
                return this.props.history.push('/');
            } else {
                return this.props.history.push('/home');
            }
        }

        if(this.props.rol === 'shopper') {
            if(currentRouteName === '/shopper') {
                return this.props.history.push('/shopper');
            } else {
                return this.props.history.push('/home-shopper');
            }
        }
    }

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            {this.props.logged && <a id="menu-toggle" className="hamburger-btn btn-menu toggle" onClick={this.handleSidebar.bind(this)}>
                                <i className="fa fa-bars"/>
                            </a>}
                            <a className='navbar-name' onClick={()=>this.goToHome()}>Vesti.me</a>
                        </div>
                        { (this.props.rol === 'shopper') &&
                            <div className="img-avatar-container-shopper min-img">
                                <img src={require('../../images/shop.jpg')} className="img-avatar-shopper"/>
                            </div>
                        }
                    </div>
                    { (this.props.rol === 'shopper') &&
                        <ul className="nav navbar-nav navbar-right max-img">
                            <li>
                                <div className="img-avatar-container-shopper">
                                    <img src={require('../../images/shop.jpg')} className="img-avatar-shopper"/>
                                </div>
                            </li>
                        </ul>
                    }
                </div>
            </nav>
        )
    }
}

export default Header;
