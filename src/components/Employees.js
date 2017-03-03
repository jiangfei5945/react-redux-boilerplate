import React from 'react';
import { connect } from 'react-redux';
import employeeAction from '../actions/employee';

class Employees extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(employeeAction.getEmployeeList());
  }

  render() {
    const { employees } = this.props;
    return (
      <ul>
        {employees && employees.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees
  };
};

Employees.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  employees: React.PropTypes.arrayOf(
    React.PropTypes.shape({ name: React.PropTypes.string })
  ).isRequired
};

export default connect(mapStateToProps)(Employees);
