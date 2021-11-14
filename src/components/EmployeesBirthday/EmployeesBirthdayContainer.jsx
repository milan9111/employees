import { connect } from "react-redux";
import { compose } from "redux";
import { useEffect } from "react";
import "./../../styles/styles.css";
import EmployeesBirthday from "./EmployeesBirthday";
import EmployeesBirthdayEmpty from "./EmployeesBirthdayEmpty";

const EmployeesBirthdayContainer = (props) => {
  useEffect(() => {
    sortEmployeesForTable();
  });

  const sortEmployeesForTable = () => {
    let arrSelectEmployyes = [];
    if (props.users.users !== null && props.users.usersInTable.length > 0) {
      props.users.usersInTable.forEach((element) => {
        let filterEmployyes = props.users.users.filter(
          (item) => item.id === element
        );
        arrSelectEmployyes.push(filterEmployyes);
      });
    }

    let sortLastName = arrSelectEmployyes.flat().sort((a, b) => {
      if (a.lastName > b.lastName) {
        return 1;
      }
      if (a.lastName < b.lastName) {
        return -1;
      }
      return 0;
    });
    return sortByMonth(sortLastName);
  };

  const sortByMonth = (sortLastName) => {
    let monthWithEmployees = {
      january: [],
      february: [],
      march: [],
      april: [],
      may: [],
      june: [],
      july: [],
      august: [],
      september: [],
      october: [],
      november: [],
      december: [],
    };
    sortLastName.forEach((element) => {
      let key = element.dob.split("-")[1];

      const setMonthsFactory = (dob, month, path) => {
        let newDob = new Date(dob).toLocaleDateString().split(".");
        newDob.splice(1, 1, `${month},`);
        newDob.push("year");
        monthWithEmployees[path].push({
          ...element,
          dob: newDob.join(" "),
        });
      };

      switch (key) {
        case "01":
          setMonthsFactory(element.dob, "January", "january");
          break;
        case "02":
          setMonthsFactory(element.dob, "February", "february");
          break;
        case "03":
          setMonthsFactory(element.dob, "March", "march");
          break;
        case "04":
          setMonthsFactory(element.dob, "April", "april");
          break;
        case "05":
          setMonthsFactory(element.dob, "May", "may");
          break;
        case "06":
          setMonthsFactory(element.dob, "June", "june");
          break;
        case "07":
          setMonthsFactory(element.dob, "July", "july");
          break;
        case "08":
          setMonthsFactory(element.dob, "August", "august");
          break;
        case "09":
          setMonthsFactory(element.dob, "September", "september");
          break;
        case "10":
          setMonthsFactory(element.dob, "October", "october");
          break;
        case "11":
          setMonthsFactory(element.dob, "November", "november");
          break;
        case "12":
          setMonthsFactory(element.dob, "December", "december");
          break;
        default:
          return monthWithEmployees;
      }
    });

    let arrMonthWithEmployees = [];
    for (let entry of Object.entries(monthWithEmployees)) {
      let upperCaseLetterInMonth =
        entry[0].split("")[0].toUpperCase() +
        entry[0].split("").slice(1).join("");
      entry.splice(0, 1, upperCaseLetterInMonth);
      arrMonthWithEmployees.push(entry);
    }

    const currentMonth = new Date().getMonth();
    let partMonths = arrMonthWithEmployees.splice(currentMonth);
    let newSortMonth = [...partMonths, ...arrMonthWithEmployees];
    return newSortMonth;
  };

  let resultsEmployeesInMonth = sortEmployeesForTable();
  let showBirthdayIndicator = [];
  resultsEmployeesInMonth.forEach((item) => {
    item[1].length > 0 && showBirthdayIndicator.push(item[1]);
  });

  return (
    <div className="app__box-birthday">
      <h3>Employees birthday</h3>
      <div className="app__months">
        {showBirthdayIndicator.length === 0 ? (
          <EmployeesBirthdayEmpty ListIsEmpty="Employees List is empty" />
        ) : (
          resultsEmployeesInMonth.map((item, index) => (
            <EmployeesBirthday key={index} filteredData={item} />
          ))
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.employeesPage,
  };
};

export default compose(connect(mapStateToProps, {}))(
  EmployeesBirthdayContainer
);
