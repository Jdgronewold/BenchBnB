import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtils from './utils/session_api_util';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  window.store = store;

  ReactDOM.render(<Root store={ store } />, root);
});
