import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';

import App from './app';
import SessionFormContainer from './session/session_form_container';
import SearchContainer from './search/search_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if(currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SearchContainer} />
          <Route path="login"
            component={ SessionFormContainer }
            onEnter={_redirectIfLoggedIn}/>
          <Route path="signup"
            component={ SessionFormContainer }
            onEnter={_redirectIfLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
