import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import store from './store';
import history from './utils/history';

import App from './App';
import CounterContainer from './containers/CounterContainer';

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/counter" component={CounterContainer}/>
          <Redirect from="*" to="/" />
        </Switch>
      </ConnectedRouter>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);