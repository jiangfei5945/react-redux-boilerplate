import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import todoApp from './reducers';
import './scss/style.scss';
import App from './components/App';
import Empty from './components/Empty';
import Employees from './components/Employees';

const store = compose(applyMiddleware(thunkMiddleware))(createStore)(todoApp);
const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/index/" component={App}>
        <Route path="employee-list" component={Employees} />
        <Route path="employee-create" component={Empty} />
      </Route>
    </Router>
  </Provider>,
  rootEl);
