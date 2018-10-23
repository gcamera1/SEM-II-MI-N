import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import './styles/common/layout.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';

render((
    <BrowserRouter>
        <div>
            <App/>
        </div>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
