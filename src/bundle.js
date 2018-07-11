import React from 'react';
import { render } from 'react-dom';
import './assets/style.scss';
import App from './components/app';

render(
  <App />,
  document.querySelector('#app')
);