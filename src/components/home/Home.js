import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from "../common/Sidebar";
import Select from 'react-select';
import moment from 'moment/min/moment-with-locales';
import { listShoppings } from '../common/actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            shopping: null,
            shoppings: [],
            error: null,
            cargando: false,
            book: null
        };
    }

    componentDidMount() {
        this.setState({ cargando: true }, () => {
            listShoppings()
                .then((shoppings) => this.setState({ shoppings, cargando: false }))
        });
        const test = [
            { value: 10001, label: 'Alto Palermo' },
            { value: 10002, label: 'Alto Avellaneda' },
            { value: 10003, label: 'Abasto' },
            { value: 10004, label: 'Dot' },
            { value: 10005, label: 'Messi' }
        ];
        const responseBookAlone = {
            shopping: {
                name: 'Alto Palermo',
                address: 'Santa Fe 3050'
            },
            shopper: null,
            book: {
                date: moment(new Date()),
                hour: '15:30 P.M.'
            }
        };
        const responseBook = {
            shopping: {
                name: 'Alto Palermo',
                address: 'Santa Fe 3050'
            },
            shopper: {
                name: 'Flavio Mendoza',
                phone: '1568384496'
            },
            book: {
                date: moment(new Date()),
                hour: '15:30 P.M.'
            }
        };
        //this.setState({shoppings: test})
        //this.setState({shoppings: test, book: responseBookAlone})
        this.setState({ shoppings: test, book: responseBook })
    }

    goTo(state) {
        this.props.history.push('/' + state);
    }

    onChange(value) {
        this.setState({ shopping: value });
    }

    nextStep() {
        if (this.state.shopping) {
            return this.props.history.push('/select-time-to-shop');
        } else {
            this.setState({ error: 'Seleccione un shopping' });
        }
    }

    formatDate(date) {
        let currentDate = moment(date);
        currentDate.locale('es');
        return currentDate.format('ddd DD, MMMM YYYY');
    }

    cancelBook() {
        this.setState({ book: null })
    }

    render() {
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
                                        <h2>Seleccione su shopping</h2>
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
                                                    options={this.state.shoppings}
                                                />
                                            </div>
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
                                        <h2 className='book-title'>Tu encuentro</h2>
                                    </div>
                                    <div className='book-info'>
                                        <div>
                                            <span>
                                                <i className="far fa-building" />
                                            </span>
                                            <span>{this.state.book.shopping.name + ' (' + this.state.book.shopping.address + ')'}</span>
                                        </div>
                                        <div>
                                            <span>
                                                <i className="far fa-calendar-alt" />
                                            </span>
                                            <span>{this.formatDate(this.state.book.book.date)}</span>
                                        </div>
                                        <div>
                                            <span>
                                                <i className="far fa-clock" />
                                            </span>
                                            <span>{this.state.book.book.hour}</span>
                                        </div>
                                        <div>
                                            <span>
                                                <i className="far fa-user" />
                                            </span>
                                            <span>
                                                {(this.state.book.shopper) ? this.state.book.shopper.name : 'Estamos buscandote un personal shopper para vos'}
                                            </span>
                                        </div>
                                        {this.state.book.shopper &&
                                            <div>
                                                <span>
                                                    <i className="fab fa-whatsapp" />
                                                </span>
                                                <span>{this.state.book.shopper.phone}</span>
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
                                        <span>*No te olvides que podes cancelar hasta 2 horas antes de tu encuentro</span>
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
