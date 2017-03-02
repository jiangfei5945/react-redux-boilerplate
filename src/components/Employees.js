import React from 'react';
import { connect } from 'react-redux';
import employeeAction from '../actions/employee';

class Employees extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(employeeAction.getEmployeeList());
  }

  render() {
    const { employee } = this.props;
    return (
      <ul>
        {employee.list && employee.list.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employee: state.employee
  };
};

Employees.propTypes = {
  dispatch: React.propTypes.function.isRequired,
  employee: React.propTypes.shape({
    list: React.PropTypes.array
  }).isRequired
};

export default connect(mapStateToProps)(Employees);
