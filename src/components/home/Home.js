import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from "../common/Sidebar";
import Select from 'react-select';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            shopping: null,
            shoppings: [],
            error: null,
            cargando: false,
            step: 1
        };
    }

    componentDidMount() {
        const test = [
            {value: 10001, label: 'Alto Palermo'},
            {value: 10002, label: 'Alto Avellaneda'},
            {value: 10003, label: 'Abasto'},
            {value: 10004, label: 'Dot'},
            {value: 10005, label: 'Messi'}
        ];
        this.setState({shoppings: test})
    }

    goTo(state) {
        this.props.history.push('/' + state);
    }

    onChange(value) {
        this.setState({shopping: value});
    }

    nextStep() {
        if (this.state.shopping) {
            return this.props.history.push('/select-time-to-shop');
        } else {
            this.setState({error: 'Seleccione un shopping'});
        }
    }

    render() {
        return (
            <div id="wrapper">
                <Header {...this.props} rol={'user'} logged={true}/>
                <Sidebar {...this.props} rol={'user'}/>
                {this.state.cargando && <div className="loading">Loading&#8230;</div>}
                <div id="page-content-wrapper">
                    <div className='container-fluid'>
                        <div className="row login-form">
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
                            <p className="botto-text"> Designed by G.C.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
