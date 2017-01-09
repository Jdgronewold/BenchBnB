import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtils from './utils/session_api_util';
import configureStore from './store/store';

import Root from './components/root';
import { fetchBenches } from './actions/bench_actions';

window.fetchBenches = fetchBenches;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  window.store = store;

  ReactDOM.render(<Root store={ store } />, root);
});
