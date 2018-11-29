import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from "../common/Sidebar";
import moment from 'moment/min/moment-with-locales';
import { getUserLogged } from '../common/auth';
import { getNextAppointment } from '../common/actions';

const appointments = [
    {
        "id": 18,
        "fecha_y_hora": "2018-11-03T18:30:00-0300",
        "horario_comienzo": null,
        "horario_fin": null,
        "estado": 0,
        "motivo_cancelacion": null,
        "asesor":
            { "id": 15, "email": "asesor1@gmail.com", "nombre": "Juanita", "apellido": "Jo", "fecha_nacimiento": null, "password": "123456", "rol": { "id": 5, "nombre": "asesor" }, "telefono": "48237819", "discr": "asesor" },
        "asesorado": { "id": 17, "email": "asesorado1@gmail.com", "nombre": "Jose", "apellido": null, "fecha_nacimiento": null, "password": "123456", "rol": { "id": 6, "nombre": "asesorado" }, "discr": "asesorado" },
        "shopping": { "id": 7, "nombre": "Abasto", "descripcion": "Descripcion", "logo": "Logo Abasto", "direccion": "Av. Corrientes 2745", "latitud": "-34.38419234", "longitud": "27.459734953", "locales": [{ "id": 3, "nombre": "Local 1", "logo": "Logo 1", "shoppings": [null] }] }
    }
]

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: true,
            time: 0,
            start: Date.now() - 0
        }
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1);
    }
    stopTimer = () => {
        const { handleStop } = this.props;
        const { time } = this.state;
        this.setState({ isOn: false })
        clearInterval(this.timer)
        if (handleStop) handleStop(time);
    }
    resetTimer = () => {
        this.setState({ time: 0, isOn: false })
    }
    render() {
        let start = (this.state.time == 0) ?
            <button onClick={this.startTimer}>start</button> :
            null
        let stop = (this.state.time == 0 || !this.state.isOn) ?
            null :
            (<div className="row">
                <button type="button" data-dismiss="modal" onClick={this.stopTimer} className="btn btn-primary button-modal-accept">Finalizar asesoramiento</button>
            </div>)
        let resume = (this.state.time == 0 || this.state.isOn) ?
            null :
            <button onClick={this.startTimer}>resume</button>
        let reset = (this.state.time == 0 || this.state.isOn) ?
            null :
            <button onClick={this.resetTimer}>reset</button>
        const duration = moment.duration(this.state.time);
        return (
            <div>
                <h3>{duration.hours()}:{duration.minutes()}:{duration.seconds()}:{duration.milliseconds()}</h3>
                {start}
                {resume}
                {stop}
                {reset}
            </div>
        )
    }
}

class HomeShopper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            cargando: false,
            book: null,
            hasTimerStarted: false,
            time: 0,
            recorridoFinished: false,
        };
    }

    componentDidMount() {
        let element = document.getElementById('body');
        element.classList.add('shopper-background');
        // this.setState({ book: appointments[0] })
        const user = getUserLogged();
        getNextAppointment(user.id, true)
            .then((appointment) => {
                this.setState({ book: appointment, cargando: false });
            })
    }

    componentWillUnmount() {
        let element = document.getElementById('body');
        element.classList.remove('shopper-background');
    }

    formatDate(date) {
        let currentDate = moment(date);
        currentDate.locale('es');
        return currentDate.format('ddd DD, MMMM YYYY');
    }

    startTimer = () => this.setState({ hasTimerStarted: true });

    handleStop = (time) => this.setState({ recorridoFinished: true, time })

    reset = () => this.setState({ book: null });

    render() {
        const { hasTimerStarted, recorridoFinished, time } = this.state;
        const duration = moment.duration(time);
        const durationBeauty = `${duration.hours() ? duration.hours() + 'h' : ''} ${duration.minutes() ? duration.minutes() + 'm' : ''} ${duration.seconds() ? duration.seconds() + 's' : ''}`
        return (
            <div id="wrapper">
                <Header {...this.props} rol={'shopper'} logged={true} />
                <Sidebar {...this.props} rol={'shopper'} />
                {this.state.cargando && <div className="loading">Loading&#8230;</div>}
                <div id="page-content-wrapper">
                    <div className='container-fluid'>
                        <div className="row login-form">
                            {!this.state.book &&
                                <div className="main-div">
                                    <div className="panel">
                                        <h2>Aún no tenes una reserva</h2>
                                    </div>
                                    <div>
                                        <i className="fas fa-bed shopper-wait" />
                                    </div>
                                </div>
                            }
                            {this.state.book &&
                                <div className="main-div">
                                    <div className="panel">
                                        <h2 className='book-title'>Tu proximo asesoramiento</h2>
                                    </div>
                                    <div className='book-info'>
                                        <div>
                                            <span>
                                                <i className="far fa-building" />
                                            </span>
                                            <span>{this.state.book.shopping.nombre + ' (' + this.state.book.shopping.direccion + ')'}</span>
                                        </div>
                                        <div>
                                            <span>
                                                <i className="far fa-calendar-alt" />
                                            </span>
                                            <span>{this.formatDate(this.state.book.fecha_y_hora)}</span>
                                        </div>
                                        <div>
                                            <span>
                                                <i className="far fa-clock" />
                                            </span>
                                            <span>{moment(this.state.book.fecha_y_hora).format('HH:mm')}</span>
                                        </div>
                                        <div>
                                            <span>
                                                <i className="far fa-user" />
                                            </span>
                                            <span>
                                                {this.state.book.asesorado.nombre} {this.state.book.asesorado.apellido}
                                            </span>
                                        </div>
                                        {this.state.book.asesorado &&
                                            <div>
                                                <span>
                                                    <i className="fab fa-whatsapp" />
                                                </span>
                                                <span>{this.state.book.asesorado.telefono}</span>
                                            </div>
                                        }
                                    </div>

                                    {recorridoFinished ? (
                                        <div className="book-message book-message-shopper">
                                            <h2>Recorrido finalizado</h2>
                                            <h4>Duracion: {durationBeauty}</h4>
                                            <button type="button" data-dismiss="modal" onClick={this.reset} className="btn btn-primary button-modal-accept">Volver</button>
                                        </div>
                                    ) : !hasTimerStarted ? (
                                        <React.Fragment>
                                            <div className="book-message book-message-shopper">
                                                <h2>¡Vestilo como vos sabes!</h2>
                                            </div>
                                            <div className="row">
                                                <button type="button" data-dismiss="modal" onClick={this.startTimer} className="btn btn-primary button-modal-accept">Comenzar asesoramiento!</button>
                                            </div>
                                        </React.Fragment>

                                    ) : (
                                                <React.Fragment>
                                                    <h2>Recorrido iniciado</h2>
                                                    <Timer handleStop={this.handleStop} />
                                                </React.Fragment>)}
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

export default HomeShopper;
