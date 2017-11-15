import React from 'react';
// import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';
import store from './redux/store';

import Home from './containers/homeContainer';
import Login from './containers/loginContainer';

const FourOhFour = () => <h1>Nothing to look here - 404</h1>;
const history = syncHistoryWithStore(browserHistory, store);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <div className="app">
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route component={FourOhFour} />
      </div>
    </Router>
  </Provider>
);

export default App;
