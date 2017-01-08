import React from 'react';
import { withRouter } from 'react-router';
import GreetingContainer from './greetings/greeting_container';

const App = ({children}) => (
  <div>
    <h1>Bench BnB</h1>
    <GreetingContainer />
    { children }
  </div>
);

export default App;
