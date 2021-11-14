import React from "react";
import "./../../styles/styles.css";

const Employees = ({
  data,
  alphabet,
  turnOnActive,
  turnOffActive,
  valueCheckForFullName,
  getStyleForFullName,
}) => {
  const onActive = (event) => {
    if (event.target.value === "true") {
      turnOnActive(event.target.id);
    } else {
      turnOffActive(event.target.id);
    }
  };

  const firstNameEmployees = data.map((item, index) => (
    <div key={index}>
      <div
        style={{ fontWeight: "bold" }}
        id={item.id}
        className={getStyleForFullName(`${item.id}`)}
      >
        {item.firstName} {item.lastName}
      </div>
      <div className="app__input">
        <label>
          <input
            type="radio"
            onClick={(event) => onActive(event)}
            value="false"
            name={item.id}
            id={item.id}
            defaultChecked="checked"
          />
          not active
        </label>
      </div>
      <div className="app__input">
        <label>
          <input
            type="radio"
            onClick={(event) => onActive(event)}
            value="true"
            name={item.id}
            id={item.id}
            defaultChecked={valueCheckForFullName(`${item.id}`)}
          />
          active
        </label>
      </div>
    </div>
  ));

  return (
    <div>
      {data.length > 0 ? (
        <div className="app__box">
          <div style={{ fontWeight: "bold" }} className="app__letter">
            {alphabet.toUpperCase()}
          </div>
          <div>{firstNameEmployees}</div>
        </div>
      ) : (
        <div className="app__box">
          <div style={{ fontWeight: "bold" }} className="app__letter">
            {alphabet.toUpperCase()}
          </div>
          <div style={{ fontWeight: "bold" }}>-------</div>
        </div>
      )}
    </div>
  );
};

export default Employees;
