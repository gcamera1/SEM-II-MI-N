import React, { Component } from 'react';
import '../../styles/login.css';
import Header from '../common/Header';
import { doLogin } from '../common/actions';
import { setStorage } from '../common/storage';
import Sidebar from "../common/Sidebar";

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
            this.setState({cargando: true}, () => {
                doLogin(this.state.email, this.state.password)
                    .then((resp) => {
                        if (resp.pacientes) delete resp['pacientes'];
                        if (resp.rol) {
                            const rol = resp.rol;
                            delete resp['rol'];
                            resp.rol = rol.nombre;
                            resp.level = rol;
                        }
                        if (resp.codigo) resp.id = resp.codigo;
                        if (resp.razon_social) resp.empresa = resp.razon_social;
                        setStorage('session', JSON.stringify(resp));
                        this.setState({cargando: true});
                        if (resp.rol === 'admin') return this.props.history.push('/listado-solicitudes-bh');
                        //if (resp.rol === 'usuario') return this.props.history.push('/listado-inasistencia');
                        if (!resp.rol) return this.setState({
                            error: 'Algo salió mal',
                            cargando: false,
                            email: null,
                            password: null,
                        });
                    })
                    .catch((err) => {
                        this.setState({error: 'Algún dato es incorrecto', cargando: false});
                        console.log(err);
                    })
            });
        } else {
            this.setState({error: 'Debe ingresar todos los campos'});
        }
    }

    render() {
        return (
            <div id="wrapper">
                <Header {...this.props} rol={'admin'} logged={false}/>
                <Sidebar {...this.props} rol={'admin'} logged={false}/>
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
                                               placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control"
                                               id="inputPassword" placeholder="Contraseña"/>
                                    </div>
                                    <div className="forgot">
                                        <div>¿Olvidaste tu constraseña? Envianos un email a
                                            support@mail.com para recuperarla.
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Inicia
                                        Sesión
                                    </button>
                                    <div className="sign-up">
                                        <a href="reset.html">¿Todavía no tenes una cuenta? Hace
                                            click acá.</a>
                                    </div>
                                </form>
                            </div>
                            <p className="botto-text"> Designed by G.C.</p>
                        </div>

                        {/*         <div className="box-content">
                            <div className="login-content">
                                {(this.state.cargando)
                                    ?
                                    <i className="fa fa-spinner fa-spin text-center loading-size"/>
                                    :
                                    <div className="form">
                                        <div className="form-content">
                                            <h2>Ingresar</h2>
                                            <form>
                                                <label>E-mail</label>
                                                <input type="text"
                                                       name="email"
                                                       onChange={(evt) => this.setState({email: evt.target.value})}
                                                       placeholder="E-mail"/>
                                                <label>Contraseña</label>
                                                <input type="password"
                                                       name="password"
                                                       onChange={(evt) => this.setState({password: evt.target.value})}
                                                       placeholder="Contraseña"/>
                                                <div className="error-message">
                                                    {this.state.error &&
                                                    <span>{this.state.error}</span>
                                                    }
                                                </div>
                                                <div className="password-recovery">
                                                    <a onClick={() => this.props.history.push('/recuperar-password')}>¿Perdiste
                                                        tu contraseña?</a>
                                                </div>
                                                <button type="button"
                                                        onClick={this.iniciarSesion.bind(this)}>

                                                    Ingresar
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
