import React, { Component } from 'react';
import { removeStorage } from '../common/storage';

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


    getOptions() {
        if (this.props.logged && this.props.rol === 'admin') {
            return (
             {/*   <div className='header-menu-options'>
                    <DropdownButton
                        title={'Menu'}
                        key={1}
                        id={'dropdown-basic'}>

                        <MenuItem eventKey='1' onClick={()=>this.goTo('/listado-solicitudes-bh')} active={this.isActive('/listado-solicitudes-bh')}>Listado de Solicitudes</MenuItem>
                        <MenuItem eventKey='2' onClick={this.logout.bind(this)}>Salir</MenuItem>
                    </DropdownButton>
                </div>*/}
            );
        } else if (this.props.logged && this.props.rol === 'usuario') {
            return (
             {/*   <div className='header-menu-options'>
                    <DropdownButton
                        title={'Menu'}
                        key={1}
                        id={'dropdown-basic'}>

                        <MenuItem eventKey='1' onClick={()=>this.goTo('/listado-empleados')} active={this.isActive('/listado-empleados')}>Listado de Empleados</MenuItem>
                        <MenuItem eventKey='2' onClick={()=>this.goTo('/listado-inasistencia')} active={this.isActive('/listado-inasistencia')}>Listado de Inasistencias</MenuItem>
                        <MenuItem eventKey='3' onClick={()=>this.goTo('/listado-solicitudes')} active={this.isActive('/listado-solicitudes')}>Listado de Solicitudes</MenuItem>
                        <MenuItem eventKey='4' onClick={()=>this.goTo('/reportes')} active={this.isActive('/reportes')}>Reportes</MenuItem>
                        <MenuItem eventKey='5' onClick={this.logout.bind(this)}>Salir</MenuItem>
                    </DropdownButton>
                </div>*/}
            );
        }
    }

    goTo(route) {
        return this.props.history.push(route);
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
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            <a id="menu-toggle" className="btn-menu toggle" onClick={this.handleSidebar.bind(this)}>
                                <i className="fa fa-bars"/>
                            </a>
                            <a href="#">Project name</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;
