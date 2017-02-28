import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import todoApp from './reducers';
import App from './components/App';

const store = createStore(todoApp);
const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/index/(:filter)" component={App} />
    </Router>
  </Provider>,
  rootEl);
