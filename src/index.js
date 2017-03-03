import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import './scss/style.scss';
import App from './components/App';
import Empty from './components/Empty';
import Employees from './components/Employees';
import EmployeeCreate from './components/EmployeeCreate';

const store = compose(applyMiddleware(thunkMiddleware))(createStore)(reducers);
const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Empty} />
        <Route path="employee-list" component={Employees} />
        <Route path="employee-create" component={EmployeeCreate} />
      </Route>
    </Router>
  </Provider>,
  rootEl);
