import React, { Component } from 'react';
import Header from '../common/Header';
import { doLogin } from '../common/actions';
import { setStorage } from '../common/storage';
import DatePicker from 'react-date-picker'
import moment from 'moment';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: null,
            apellido: null,
            email: null,
            fechaNac: null,
            password: null,
            password2: null,
            error: null,
            cargando: false
        };
    }

    registrarUsuario() {
        let error = this.validarDatos();
        if (!error) {
            return this.props.history.push('/');
            /*this.setState({cargando: true}, () => {
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
            });*/
        } else {
            this.setState({error: error});
        }
    }

    validarDatos() {
        let error = null;
        if (!this.state.nombre) return error = 'Tenes que ingresar tu nombre';
        if (!this.state.apellido) return error = 'Tenes que ingresar tu apellido';
        if (!this.state.email) return error = 'Tenes que ingresar tu email';
        if (!this.state.fechaNac) return error = 'Tenes que ingresar tu fecha de nacimiento';
        if (!this.state.password) return error = 'Tenes que ingresar una contraseña';
        if (!this.state.password2) return error = 'Tenes que ingresar nuevamente tu contraseña';
        if (this.state.password !== this.state.password2) return error = 'Las contraseñas no coinciden';

        return error;
    }

    goTo(state) {
        this.props.history.push('/' + state);
    }

    onChangeDate = date => this.setState({fechaNac: date});

    render() {
        return (
            <div id="wrapper">
                <Header {...this.props} rol={'user'} logged={false}/>
                {this.state.cargando && <div className="loading">Loading&#8230;</div>}
                <div id="page-content-wrapper">
                    <div className='container-fluid'>
                        <div className="row login-form">
                            <div className="main-div">
                                <div className="panel">
                                    <h2>Registrate</h2>
                                    <p>Por favor, ingresa tus datos.</p>
                                </div>
                                <form id="Login">
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                               id="inputNombre"
                                               onChange={(evt) => this.setState({nombre: evt.target.value})}
                                               placeholder="Nombre"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                               id="inputApellido"
                                               onChange={(evt) => this.setState({apellido: evt.target.value})}
                                               placeholder="Apellido"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control"
                                               id="inputEmail"
                                               onChange={(evt) => this.setState({email: evt.target.value})}
                                               placeholder="Email"/>
                                    </div>
                                    <div className="form-group datepicker-field">
                                        <input type="text"
                                               className="form-control datepicker-placeholder"
                                               readOnly={true}
                                               placeholder="Fecha Nac."/>
                                        <DatePicker
                                            name={'inputNac'}
                                            maxDate={new Date()}
                                            clearIcon={null}
                                            className={['form-control', 'datepicker-input']}
                                            onChange={this.onChangeDate}
                                            value={this.state.fechaNac}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control"
                                               onChange={(evt) => this.setState({password: evt.target.value})}
                                               id="inputPassword" placeholder="Contraseña"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control"
                                               id="inputPassword2"
                                               onChange={(evt) => this.setState({password2: evt.target.value})}
                                               placeholder="Repeti Contraseña"/>
                                    </div>
                                    <div className="error-message">
                                        {this.state.error &&
                                        <span>{this.state.error}</span>
                                        }
                                    </div>
                                    <button type="button"
                                            onClick={this.registrarUsuario.bind(this)}
                                            className="btn btn-primary">Registrarme
                                    </button>
                                    <div className="link-text">
                                        <a onClick={() => this.goTo('')}>¿Ya tenes una cuenta?
                                            Hace
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

export default SignUp;
