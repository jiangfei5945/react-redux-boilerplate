import React from 'react';
import { Link } from 'react-router';

const App = (props) => {
  return (
    <div>
      <div className="header">
        <span className="header-title">Console</span>
      </div>
      <div className="main">
        <div className="sider-bar">
          <ul>
            <li><Link to="/employee-list">list</Link></li>
            <li><Link to="/employee-create">create</Link></li>
          </ul>
        </div>
        <div className="content">
          {props.children}
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default App;
