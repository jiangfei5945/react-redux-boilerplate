import axios from 'axios';

const setEmployees = (list) => {
  return {
    type: 'setEmployees',
    data: list
  };
};

const getEmployeeList = () => {
  return (dispatch) => {
    axios.get('/p/employees')
      .then((response) => {
        dispatch(setEmployees(response.data.data));
      });
  };
};

const addEmployee = (employee) => {
  return {
    type: 'addEmployee',
    data: employee
  };
};

const doAddEmployee = (employee) => {
  return (dispatch) => {
    axios.post('/p/employee/add', { employee })
      .then((response) => {
        dispatch(addEmployee(response.data.data));
      });
  };
};

export default { setEmployees, getEmployeeList, addEmployee, doAddEmployee };
