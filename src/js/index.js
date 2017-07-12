//All this file does is render components to DOM
import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/Main';
import '../css/index.css';

const container = document.getElementById('app');

ReactDOM.render(<Main />, container);
