import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  requestEmployees,
  turnOnActive,
  turnOffActive,
} from "../../redux/employeesReducer";
import "./../../styles/styles.css";
import Employees from "./Employees";

const EmployeesContainer = ({
  users,
  requestEmployees,
  turnOnActive,
  turnOffActive,
}) => {
  const [arrEmployees, setArrEmployees] = useState(users);

  useEffect(() => {
    requestEmployees();
  }, [requestEmployees]);

  useEffect(() => {
    setArrEmployees(users);
    localStorage.setItem("usersInTable", JSON.stringify(users.usersInTable));
  }, [users]);

  let data;
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const employeesData = new Map();
  if (arrEmployees.users !== null) {
    data = arrEmployees.users;
    data.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));

    for (let i = 0; i < alphabet.length; i++) {
      employeesData.set(alphabet[i], []);
    }

    for (let j = 0; j < data.length; j++) {
      for (let keys of employeesData.keys()) {
        if (keys === data[j].firstName.split("")[0].toLowerCase()) {
          employeesData.get(keys).push(data[j]);
        }
      }
    }
  }

  const arrayEmployeesData = Array.from(employeesData);

  const getStyleForFullName = (id) => {
    if (users.usersInTable.indexOf(id) > -1) {
      return "app__activeFullName";
    }
  };

  const valueCheckForFullName = (id) => {
    if (users.usersInTable.indexOf(id) > -1) {
      return true;
    }
  };

  return data ? (
    <>
      <h3>Employees</h3>
      <div className="app__fullNameEmployees">
        {arrayEmployeesData.map((item, index) => {
          return (
            <Employees
              key={index}
              alphabet={item[0]}
              data={item[1]}
              turnOnActive={turnOnActive}
              turnOffActive={turnOffActive}
              valueCheckForFullName={valueCheckForFullName}
              getStyleForFullName={getStyleForFullName}
            />
          );
        })}
      </div>
    </>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    users: state.employeesPage,
  };
};

export default compose(
  connect(mapStateToProps, { requestEmployees, turnOnActive, turnOffActive })
)(EmployeesContainer);
