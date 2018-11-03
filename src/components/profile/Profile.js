import React, { Component } from 'react';
import Header from '../common/Header';
import { doLoginAsesorado, actualizarAsesorado } from '../common/actions';
import { setStorage, getStorage } from '../common/storage';
import DatePicker from 'react-date-picker'
import moment from 'moment';
import Sidebar from "../common/Sidebar";
import { setUserLocalStorage } from '../common/utils';
import { toast } from 'react-toastify';

class Profile extends Component {
    constructor(props) {
        super(props);
        const user = JSON.parse(getStorage('session'));
        const { id, nombre, apellido, fechaNac } = user;
        this.state = {
            id,
            nombre,
            apellido,
            fechaNac,
            error: null,
            cargando: false
        };
    }

    guardarPerfil() {
        let error = this.validarDatos();
        if (!error) {
            const { id, nombre, apellido, fechaNac } = this.state;
            this.setState({ cargando: true }, () => {
                actualizarAsesorado({ id, nombre, apellido, fechaNac })
                    .then(res => {
                        setUserLocalStorage(res);
                        this.setState({ cargando: false });
                        toast.success('Éxito al actualizar perfil.');
                        return this.props.history.push('/home');
                    })
                    .catch((error) => {
                        this.setState({ error, cargando: false });
                        console.log(error);
                    })
            });
        } else {
            this.setState({ error: error });
        }
    }

    validarDatos() {
        let error = null;
        if (!this.state.nombre) return error = 'Tenes que ingresar tu nombre';
        if (!this.state.apellido) return error = 'Tenes que ingresar tu apellido';
        if (!this.state.fechaNac) return error = 'Tenes que ingresar tu fecha de nacimiento';

        return error;
    }

    goTo(state) {
        this.props.history.push('/' + state);
    }

    onChangeDate = date => this.setState({ fechaNac: date });

    render() {
        const { nombre, apellido, fechaNac } = this.state;
        return (
            <div id="wrapper">
                <Header {...this.props} rol={'user'} logged={true} />
                <Sidebar {...this.props} rol={'user'} />
                {this.state.cargando && <div className="loading">Loading&#8230;</div>}
                <div id="page-content-wrapper">
                    <div className='container-fluid'>
                        <div className="row login-form">
                            <div className="main-div">
                                <div className="panel">
                                    <h2>Perfil Público</h2>
                                </div>
                                <form id="Login">
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                            id="inputNombre"
                                            value={nombre}
                                            onChange={(evt) => this.setState({ nombre: evt.target.value })}
                                            placeholder="Nombre" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                            id="inputApellido"
                                            value={apellido}
                                            onChange={(evt) => this.setState({ apellido: evt.target.value })}
                                            placeholder="Apellido" />
                                    </div>
                                    <div className="form-group datepicker-field">
                                        <input type="text"
                                            className="form-control datepicker-placeholder"
                                            readOnly={true}
                                            placeholder="Fecha Nac." />
                                        <DatePicker
                                            name={'inputNac'}
                                            maxDate={new Date()}
                                            clearIcon={null}
                                            className={['form-control', 'datepicker-input']}
                                            onChange={this.onChangeDate}
                                            value={fechaNac}
                                        />
                                    </div>
                                    <div className="error-message">
                                        {this.state.error &&
                                            <span>{this.state.error}</span>
                                        }
                                    </div>
                                    <button type="button"
                                        onClick={this.guardarPerfil.bind(this)}
                                        className="btn btn-primary">Guardar
                                    </button>
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

export default Profile;
