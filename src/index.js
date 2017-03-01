import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import todoApp from './reducers';
import './scss/style.scss';
import App from './components/App';
import Empty from './components/Empty';

const store = createStore(todoApp);
const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/index/" component={App}>
        <Route path="employee-list" component={Empty} />
        <Route path="employee-create" component={Empty} />
      </Route>
    </Router>
  </Provider>,
  rootEl);
