import React, { Component } from 'react';
import Header from '../common/Header';
import { doLogin } from '../common/actions';
import { setStorage } from '../common/storage';
import Sidebar from "../common/Sidebar";
import DatePicker from 'react-date-picker'
import moment from 'moment';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            error: null,
            cargando: false,
            startDate: new Date()
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

    goTo(state) {
        this.props.history.push('/' + state);
    }


    onChange = date => this.setState({ date });

    render() {
        return (
            <div id="wrapper">
                <Header {...this.props} rol={'admin'} logged={false}/>
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
                                               placeholder="Nombre"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                               id="inputApellido"
                                               placeholder="Apellido"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control"
                                               id="inputEmail"
                                               placeholder="Email"/>
                                    </div>
                                    <div className="form-group datepicker-field">
                                        <input type="text" className="form-control datepicker-placeholder" readOnly={true}
                                               placeholder="Fecha Nac."/>
                                        <DatePicker
                                            name={'inputNac'}
                                            maxDate={new Date()}
                                            clearIcon={null}
                                            className={['form-control', 'datepicker-input']}
                                            onChange={this.onChange}
                                            value={this.state.date}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control"
                                               id="inputPassword" placeholder="Contraseña"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control"
                                               id="inputPassword2"
                                               placeholder="Repeti Contraseña"/>
                                    </div>
                                    <button type="submit"
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
