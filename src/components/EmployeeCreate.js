import React from 'react';
import { connect } from 'react-redux';
import employeeAction from '../actions/employee';

class EmployeeCreate extends React.Component {
  constructor(props) {
    super(props);

    this.Add = this.Add.bind(this);
  }

  Add() {
    const { dispatch } = this.props;
    const name = this.inputName.value;
    dispatch(employeeAction.doAddEmployee({ name }));
  }

  render() {
    const { employees } = this.props;
    return (
      <div>
        <input type="text" ref={(ref) => { this.inputName = ref; }} />
        <button onClick={this.Add}>add</button>
        <div>
          <ul>
            {employees && employees.map((item) => {
              return <li key={item.name}>{item.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees
  };
};

EmployeeCreate.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  employees: React.PropTypes.arrayOf(
    React.PropTypes.shape({ name: React.PropTypes.string })
  ).isRequired
};

export default connect(mapStateToProps)(EmployeeCreate);
