const setEmployees = (state = [], action) => {
  state = [...action.data];
  return state;
};

const addEmployee = (state = [], action) => {
  state = [...state, action.data];
  return state;
};

const employees = (state = [], action) => {
  switch (action.type) {
    case 'setEmployees':
      return setEmployees(state, action);
    case 'addEmployee':
      return addEmployee(state, action);
    default:
      return state;
  }
};

export default employees;
