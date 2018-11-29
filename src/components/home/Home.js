import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from "../common/Sidebar";
import Select from 'react-select';
import moment from 'moment/min/moment-with-locales';
import { listShoppings, getNextAppointment, cancelAppointment } from '../common/actions';
import { getUserLogged } from '../common/auth';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            shopping: null,
            shoppings: null,
            shoppingsSelect: [],
            error: null,
            cargando: false,
            book: null
        };
    }

    componentDidMount() {
        this.setState({ cargando: true }, () => {
            const user = getUserLogged();
            getNextAppointment(user.id)
                .then((appointment) => {
                    this.setState({ book: appointment, cargando: false });
                })
            listShoppings()
                .then(({ select: shoppingsSelect, list: shoppings }) => console.log(shoppingsSelect, shoppings) || this.setState({ shoppingsSelect, shoppings, cargando: false }))
        });
    }

    goTo(state) {
        this.props.history.push('/' + state);
    }

    onChange(value) {
        this.setState({ shopping: value });
    }

    nextStep() {
        const { shopping } = this.state;
        if (shopping) {
            console.log(shopping);
            return this.props.history.push(`/select-time-to-shop/${shopping.value}`);
        } else {
            this.setState({ error: 'Seleccione un shopping' });
        }
    }

    formatDate(date) {
        let currentDate = moment(date);
        currentDate.locale('es');
        return currentDate.format('ddd DD, MMMM YYYY');
    }

    formatHour(date) {
        let currentDate = moment(date);
        currentDate.locale('es');
        return currentDate.format('hh:mm A');
    }

    cancelBook() {
        const { book: { id: appointmentId } } = this.state;
        cancelAppointment({ appointmentId })
            .then(() => {
                toast.success("Turno cancelado con éxito.");
                this.setState({ book: null });
            })
            .catch(() => {
                toast.error("Ocurrió un erro al cancelar el turno, intente más tarde.");
            });
    }

    render() {
        const { book, shopping: selectedShopping, shoppings } = this.state;
        let { asesor, estado, fecha_y_hora: fechaHora, shopping } = "";
        if (book) ({ asesor, estado, fecha_y_hora: fechaHora, shopping } = book);
        console.log(selectedShopping, shoppings);
        return (
            <div id="wrapper">
                <Header {...this.props} rol={'user'} logged={true} />
                <Sidebar {...this.props} rol={'user'} />
                {this.state.cargando && <div className="loading">Loading&#8230;</div>}
                <div id="page-content-wrapper">
                    <div className='container-fluid'>
                        <div className="row login-form">
                            {!this.state.book &&
                                <div className="main-div">
                                    <div className="panel">
                                        <h2>Elegí el shopping donde querés que te asesoremos.</h2>
                                    </div>
                                    <form id="shopping">
                                        <div className="form-group">
                                            <div>
                                                <label>Destino</label>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    isDisabled={false}
                                                    isLoading={false}
                                                    isClearable={true}
                                                    placeholder={'Ej: Alto Palermo'}
                                                    loadingMessage={() => 'Buscando...'}
                                                    noOptionsMessageCSS={() => 'No se encontraron resultados'}
                                                    noOptionsMessage={() => 'No se encontraron resultados'}
                                                    isRtl={false}
                                                    isSearchable={true}
                                                    name="shoppings"
                                                    value={this.state.shopping}
                                                    onChange={this.onChange.bind(this)}
                                                    options={this.state.shoppingsSelect}
                                                />
                                            </div>
                                            {selectedShopping && (
                                                <React.Fragment>
                                                    <div className="clearfix"></div>
                                                    <div className="shopping-info row">
                                                        <p className="descripcion text-left" style={{ margin: "20px" }}>
                                                            {shoppings[selectedShopping.value].descripcion}
                                                        </p>
                                                    </div>
                                                    <div className="direccion">
                                                        <a target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${shoppings[selectedShopping.value].latitud},${shoppings[selectedShopping.value].longitud}`}>
                                                            {shoppings[selectedShopping.value].direccion}
                                                        </a></div>
                                                </React.Fragment>
                                            )}
                                        </div>
                                        <div className="error-message">
                                            {this.state.error &&
                                                <span>{this.state.error}</span>
                                            }
                                        </div>
                                        <button type="button"
                                            onClick={this.nextStep.bind(this)}
                                            className="btn btn-primary">Continuar
                                    </button>
                                    </form>
                                </div>
                            }
                            {this.state.book &&
                                <div className="main-div">
                                    <div className="panel">
                                        <h2 className='book-title'>Información de tu encuentro</h2>
                                    </div>
                                    <div className='book-info'>
                                        <div>
                                            <span>
                                                <i className="far fa-building" />
                                            </span>
                                            <span>{shopping.nombre + ' (' + shopping.direccion + ')'}</span>
                                        </div>
                                        <div>
                                            <span>
                                                <i className="far fa-calendar-alt" />
                                            </span>
                                            <span>{this.formatDate(fechaHora)}</span>
                                        </div>
                                        <div>
                                            <span>
                                                <i className="far fa-clock" />
                                            </span>
                                            <span>{this.formatHour(fechaHora)}</span>
                                        </div>
                                        <div>
                                            <span>
                                                <i className="far fa-user" />
                                            </span>
                                            <span>
                                                {(this.state.book.asesor) ? `${this.state.book.asesor.nombre} ${this.state.book.asesor.apellido}` : 'Le estamos avisando a tu personal shopper'}
                                            </span>
                                        </div>
                                        {this.state.book.asesor && this.state.book.asesor.phone &&
                                            < div >
                                                <span>
                                                    <i className="fab fa-whatsapp" />
                                                </span>
                                                <span>{this.state.book.asesor.phone}</span>
                                            </div>
                                        }
                                    </div>
                                    <div className="book-message">
                                        <h2>¡Te esperamos!</h2>
                                    </div>
                                    <div className="link-text link-button">
                                        <a data-toggle="modal" data-target=".bs-example-modal-sm">
                                            Cancelar turno
                                    </a>
                                    </div>
                                    <div className="cancel-book">
                                        <span>*No te olvides que podes cancelar hasta 2 horas antes de tu encuentro sin costo adicional.</span>
                                    </div>

                                    <div className="modal fade bs-example-modal-sm" tabIndex="-1" role="dialog"
                                        aria-labelledby="mySmallModalLabel">
                                        <div className="modal-dialog modal-sm" role="document">
                                            <div className="modal-content modal-text">
                                                ¿Estás seguro que queres cancelar tu turno?
                                        </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary button-modal-back"
                                                    data-dismiss="modal">Volver
                                            </button>
                                                <button type="button" data-dismiss="modal" onClick={this.cancelBook.bind(this)} className="btn btn-primary button-modal-accept">Cancelar turno</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            <p className="botto-text"> Designed by G.C.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
