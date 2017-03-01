import React from 'react';
import {Link} from 'react-router';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = (props) => (
  <div>
    <div className="header">
      <span className="header-title">Console</span>
    </div>
    <div className="main">
      <div className="sider-bar">
        <ul>
          <li><Link to="/index/employee-list">list</Link></li>
          <li><Link to="/index/employee-create">create</Link></li>
        </ul>
      </div>
      <div className="content">
        {props.children}
      </div>
    </div>
  </div>
);

export default App;