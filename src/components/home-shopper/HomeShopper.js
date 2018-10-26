import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from "../common/Sidebar";
import moment from 'moment/min/moment-with-locales';

class HomeShopper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            cargando: false,
            book: null
        };
    }

    componentDidMount() {
        let element = document.getElementById('body');
        element.classList.add('shopper-background');

        const responseBook = {
            shopping: {
                name: 'Alto Palermo',
                address: 'Santa Fe 3050'
            },
            client: {
                name: 'Leo Messi',
                phone: '1568384496'
            },
            book: {
                date: moment(new Date()),
                hour: '15:30 P.M.'
            }
        };
        this.setState({book: null})
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

    render() {
        return (
            <div id="wrapper">
                <Header {...this.props} rol={'shopper'} logged={true}/>
                <Sidebar {...this.props} rol={'shopper'}/>
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
                                    <i className="fas fa-bed shopper-wait"/>
                                </div>
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
                                            <i className="far fa-building"/>
                                        </span>
                                        <span>{this.state.book.shopping.name + ' (' + this.state.book.shopping.address + ')'}</span>
                                    </div>
                                    <div>
                                        <span>
                                            <i className="far fa-calendar-alt"/>
                                        </span>
                                        <span>{this.formatDate(this.state.book.book.date)}</span>
                                    </div>
                                    <div>
                                        <span>
                                            <i className="far fa-clock"/>
                                        </span>
                                        <span>{this.state.book.book.hour}</span>
                                    </div>
                                    <div>
                                        <span>
                                            <i className="far fa-user"/>
                                        </span>
                                        <span>
                                            {this.state.book.client.name}
                                        </span>
                                    </div>
                                    {this.state.book.client &&
                                    <div>
                                        <span>
                                             <i className="fab fa-whatsapp"/>
                                        </span>
                                        <span>{this.state.book.client.phone}</span>
                                    </div>
                                    }
                                </div>
                                <div className="book-message book-message-shopper">
                                    <h2>¡Vestilo como vos sabes!</h2>
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

export default HomeShopper;
