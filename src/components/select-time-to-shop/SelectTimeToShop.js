import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from "../common/Sidebar";
import Calendar from 'react-calendar';
import Select from 'react-select';

class SelectTimeToShop extends Component {
    constructor(props) {
        super(props);
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.state = {
            date: tomorrow,
            hour: {value: 6, label: '06'},
            minute: {value: 30, label: '30'},
            time: {value: 'PM', label: 'PM'},
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

    onChange(value) {
        this.setState({date: value});
    }

    nextStep() {
        if (this.state.time && this.state.hour && this.state.minute) {
            return this.props.history.push('/home');
        } else {
            this.setState({error: 'Debe seleccionar una fecha y un horario'});
        }
    }

    render() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

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
                                    <h2>Seleccione día y horario</h2>
                                </div>
                                <form id="shopping">
                                    <div className="form-group">
                                        <div>
                                            <Calendar
                                                minDate={tomorrow}
                                                className={['calendar-custom']}
                                                onChange={this.onChange.bind(this)}
                                                value={this.state.date}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group time-picker">
                                        <div>
                                            <Select
                                                id="selected-hours"
                                                onBlurResetsInput={false}
                                                onSelectResetsInput={false}
                                                options={[
                                                    {value: 1, label: '01'},
                                                    {value: 2, label: '02'},
                                                    {value: 3, label: '03'},
                                                    {value: 4, label: '04'},
                                                    {value: 5, label: '05'},
                                                    {value: 6, label: '06'},
                                                    {value: 7, label: '07'},
                                                    {value: 8, label: '08'},
                                                    {value: 9, label: '09'},
                                                    {value: 10, label: '10'},
                                                    {value: 11, label: '11'},
                                                    {value: 12, label: '12'}
                                                ]}
                                                simpleValue
                                                clearable={false}
                                                name="selected-hours"
                                                value={this.state.hour}
                                                onChange={(newValue) => this.setState({hour: newValue})}
                                                rtl={false}
                                                searchable={false}
                                            />
                                        </div>
                                        <div className='time-middle'>
                                            <Select
                                                id="selected-minutes"
                                                onBlurResetsInput={false}
                                                onSelectResetsInput={false}
                                                options={[
                                                    {value: 0, label: '00'},
                                                    {value: 15, label: '15'},
                                                    {value: 30, label: '30'},
                                                    {value: 45, label: '45'}
                                                ]}
                                                simpleValue
                                                clearable={false}
                                                name="selected-minutes"
                                                value={this.state.minute}
                                                onChange={(newValue) => this.setState({minute: newValue})}
                                                rtl={false}
                                                searchable={false}
                                            />
                                        </div>
                                        <div>
                                            <Select
                                                id="selected-time"
                                                onBlurResetsInput={false}
                                                onSelectResetsInput={false}
                                                options={[
                                                    {value: 'AM', label: 'AM'},
                                                    {value: 'PM', label: 'PM'}
                                                ]}
                                                simpleValue
                                                clearable={false}
                                                name="selected-time"
                                                value={this.state.time}
                                                onChange={(newValue) => this.setState({time: newValue})}
                                                rtl={false}
                                                searchable={false}
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
                                            className="btn btn-primary">Reservar
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

export default SelectTimeToShop;
