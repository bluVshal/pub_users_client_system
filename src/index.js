import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserClient from './components/UserClient';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <UserClient />
  </React.StrictMode>,
  document.getElementById('root')
);
