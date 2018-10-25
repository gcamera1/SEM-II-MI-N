import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from "../common/Sidebar";

class HomeShopper extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let element = document.getElementById('body');
        element.classList.add('shopper-background');
    }

    componentWillUnmount() {
        let element = document.getElementById('body');
        element.classList.remove('shopper-background');
    }

    render() {
        return (
            <div id="wrapper">
                <Header {...this.props} rol={'shopper'} logged={true}/>
                <Sidebar {...this.props} rol={'shopper'}/>
                <div id="page-content-wrapper">
                    <div className='container-fluid'>
                        <div className="content-flex">
                            <div>
                               SHOPPER HOME
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeShopper;
