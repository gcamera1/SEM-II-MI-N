import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from "../common/Sidebar";
import Calendar from 'react-calendar';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    goTo(state) {
        this.props.history.push('/' + state);
    }

    render() {
        return (
            <div id="wrapper">
                <Header {...this.props} rol={'admin'} logged={true}/>
                <Sidebar {...this.props} rol={'admin'}/>
                <div id="page-content-wrapper">
                    <div className='container-fluid'>
                        <div className="content-flex">
                            <div>
                                <Calendar
                                    onChange={this.onChange}
                                    value={this.state.date}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
