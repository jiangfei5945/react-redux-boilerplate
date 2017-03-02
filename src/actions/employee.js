import axios from 'axios';

const setEmployeeList = (list) => {
  return {
    type: 'setEmployeeList',
    data: list
  };
};

const getEmployeeList = () => {
  return (dispatch) => {
    axios.get('/p/employees')
      .then((response) => {
        dispatch(setEmployeeList(response.data.data));
      });
  };
};

export default { setEmployeeList, getEmployeeList };
