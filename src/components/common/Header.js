import React, { Component } from 'react';
import { removeStorage } from '../common/storage';

class Header extends Component {
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
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed"
                                data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                                aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand" href="#">Project name</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;
