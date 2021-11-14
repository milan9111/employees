import { employeesAPI } from "../api/api";

const GET_USERS = "GET-USERS";
const ADD_EMPLOYEES_IN_TABLE = "ADD-EMPLOYEES-IN-TABLE";
const REMOVE_EMPLOYEES_IN_TABLE = "REMOVE-EMPLOYEES-IN-TABLE";

let initialState = {
  users: null,
  usersInTable: JSON.parse(window.localStorage.getItem("usersInTable") || "[]"),
};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.users };
    case ADD_EMPLOYEES_IN_TABLE:
      const active = document.getElementById(`${action.event}`);
      active.style.color = "blue";
      return {
        ...state,
        usersInTable: Array.from([...state.usersInTable, active.id]),
      };

    case REMOVE_EMPLOYEES_IN_TABLE:
      const unActive = document.getElementById(`${action.event}`);
      if (state.usersInTable.indexOf(unActive.id) > -1) {
        unActive.style.color = "black";
        state.usersInTable.splice(state.usersInTable.indexOf(unActive.id), 1);
      }
      return { ...state, usersInTable: [...state.usersInTable] };

    default:
      return state;
  }
};

export let getUsers = (users) => ({ type: GET_USERS, users });
export let addEmpoyeesInTable = (event) => ({
  type: ADD_EMPLOYEES_IN_TABLE,
  event,
});
export let removeEmpoyeesInTable = (event) => ({
  type: REMOVE_EMPLOYEES_IN_TABLE,
  event,
});

export const requestEmployees = () => {
  return async (dispatch) => {
    let dataUsers = await employeesAPI.getEmployees();
    dispatch(getUsers(dataUsers));
  };
};

export const turnOnActive = (event) => {
  return (dispatch) => {
    dispatch(addEmpoyeesInTable(event));
  };
};

export const turnOffActive = (event) => {
  return (dispatch) => {
    dispatch(removeEmpoyeesInTable(event));
  };
};
