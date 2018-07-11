import React from 'react';
import { hydrate } from 'react-dom';

import './assets/style.scss';
import App from './components/app';

hydrate(
  <App />,
  document.querySelector('#app')
);