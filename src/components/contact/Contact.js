import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sended: false,
            loading: false,
        }
    }
    send = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ sended: true, loading: false });
        }, 2000);
    }
    render() {
        const { loading, sended } = this.state;
        return (
            <div id="wrapper">
                <Header {...this.props} rol={'shopper'} logged={true} />
                <Sidebar {...this.props} rol={'shopper'} />
                {loading && <div className="loading">Loading&#8230;</div>}
                <div id="page-content-wrapper">
                    <div className='container-fluid'>
                        <div className="row">
                            <div className="main-div">
                                <div className="panel">
                                    {sended ? (<h2>Gracias por contactarnos, recibirás una respuesta a la brevedad.</h2>) : (
                                        <form>
                                            <div class="card border-primary rounded-0">
                                                <div class="card-header p-0">
                                                    <div class="text-white text-center py-2">
                                                        <h3><i class="fa fa-envelope"></i> Contactanos</h3>
                                                        <p class="m-0">Con gusto te ayudaremos</p>
                                                    </div>
                                                </div>
                                                <div class="card-body p-3">
                                                    <div class="form-group">
                                                        <div class="input-group mb-2">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                                            </div>
                                                            <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre y Apellido" required />
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="input-group mb-2">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                                                            </div>
                                                            <input type="email" class="form-control" id="nombre" name="email" placeholder="ejemplo@gmail.com" required />
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <div class="input-group mb-2">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text"><i class="fa fa-comment text-info"></i></div>
                                                            </div>
                                                            <textarea class="form-control" placeholder="Envianos tu Mensaje" required></textarea>
                                                        </div>
                                                    </div>

                                                    <div class="text-center">
                                                        <input type="button" onClick={this.send} value="Enviar" class="btn btn-info btn-block rounded-0 py-2" />
                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Contact;