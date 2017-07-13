import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import UserSignup from './components/UserSignup';

import './stylesheets/main.scss';
import 'react-datepicker/dist/react-datepicker.css';

ReactDOM.render(
    <section className='main'>
        <UserSignup/>
    </section>,
  document.getElementById('app')
);
