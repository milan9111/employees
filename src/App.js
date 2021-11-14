import "./styles/styles.css";
import EmployeesContainer from "./components/Employees/EmployeesContainer";
import EmployeesBirthdayContainer from "./components/EmployeesBirthday/EmployeesBirthdayContainer";

function App() {
  return (
    <div className="app__container">
      <div className="app__leftside">
        <EmployeesContainer />
      </div>
      <div className="app__rightside">
        <EmployeesBirthdayContainer />
      </div>
    </div>
  );
}

export default App;
