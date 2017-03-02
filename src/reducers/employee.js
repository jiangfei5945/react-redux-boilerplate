const employee = (state = {}, action) => {
  switch (action.type) {
    case 'setEmployeeList':
      return {
        list: action.data
      };

    default:
      return state;
  }
};

export default employee;
