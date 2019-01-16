import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './data';
import bildungdata from './bildungdata';
import './index.css';

ReactDOM.render(
    <App
        data={data}
        bildungdata = {bildungdata}
    />,
    document.getElementById('root'));