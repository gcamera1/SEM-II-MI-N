import React, { Component } from 'react';
import Header from '../common/Header';
import { doLoginAsesorado } from '../common/actions';
import { setStorage } from '../common/storage';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            error: null,
            cargando: false
        };
    }

    iniciarSesion() {
        if (this.state.email && this.state.password) {
            // return this.props.history.push('/home');
            this.setState({ cargando: true }, () => {
                doLoginAsesorado(this.state.email, this.state.password)
                    .then((resp) => {
                        console.log("Login response: ", resp);
                        if (resp.rol) {
                            const rol = resp.rol;
                            delete resp['rol'];
                            resp.rol = rol.nombre;
                            resp.level = rol;
                        }
                        setStorage('session', JSON.stringify(resp));
                        this.setState({ cargando: true });
                        if (resp.rol === 'admin') return this.props.history.push('/listado-solicitudes-bh');
                        if (resp.rol === 'asesorado') return this.props.history.push('/home');
                        if (!resp.rol) return this.setState({
                            error: 'Algo salió mal',
                            cargando: false,
                            email: null,
                            password: null,
                        });
                    })
                    .catch((error) => {
                        this.setState({ error, cargando: false });
                        console.log(error);
                    })
            });
        } else {
            this.setState({ error: 'Tenes que ingresar todos los campos' });
        }
    }

    goTo(state) {
        this.props.history.push('/' + state);
    }

    render() {
        return (
            <div id="wrapper">
                <Header {...this.props} rol={'user'} logged={false} />
                {this.state.cargando && <div className="loading">Loading&#8230;</div>}
                <div id="page-content-wrapper">
                    <div className='container-fluid'>
                        <div className="row login-form">
                            <div className="main-div">
                                <div className="panel">
                                    <h2>Inicia Sesión</h2>
                                    <p>Por favor, ingresa tu email y contraseña.</p>
                                </div>
                                <form id="Login">
                                    <div className="form-group">
                                        <input type="email" className="form-control"
                                            id="inputEmail"
                                            onChange={(evt) => this.setState({ email: evt.target.value })}
                                            placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control"
                                            onChange={(evt) => this.setState({ password: evt.target.value })}
                                            id="inputPassword" placeholder="Contraseña" />
                                    </div>
                                    <div className="forgot">
                                        <div>¿Olvidaste tu constraseña? Envianos un email a
                                            support@mail.com para recuperarla.
                                        </div>
                                    </div>
                                    <div className="error-message">
                                        {this.state.error &&
                                            <span>{this.state.error}</span>
                                        }
                                    </div>
                                    <button type="button" className="btn btn-primary" onClick={this.iniciarSesion.bind(this)}>
                                        Inicia Sesión
                                    </button>
                                    <div className="link-text">
                                        <a onClick={() => this.goTo('sign-up')}>¿Todavía no
                                            tenes una cuenta? Hace
                                            click acá.</a>
                                    </div>
                                </form>
                            </div>
                            <p className="botto-text"> Designed by G.C.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
