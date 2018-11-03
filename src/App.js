import React from 'react'
import Router from './components/Router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
    <div>
        <ToastContainer />
        <Router />
    </div>
);
export default App