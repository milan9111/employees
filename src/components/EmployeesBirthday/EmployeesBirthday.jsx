import React from "react";
import "./../../styles/styles.css";

const EmployeesBirthday = ({ filteredData }) => {
  let showDataIndicator = [];
  filteredData[1].forEach((item) => {
    showDataIndicator.push(item);
  });

  return (
    <>
      <div>
        {filteredData.map((item, index) => {
          return (
            <div key={index}>
              <div style={{ fontWeight: "bold" }}>
                {typeof item === "string" && <div>{item}</div>}
              </div>

              {
                <div>
                  {typeof item === "object" &&
                    item.map((elem) => {
                      return (
                        <div key={elem.id} className="app__fullData">
                          <span>
                            <span style={{ fontSize: 24 }}>&bull;</span>{" "}
                            {elem.lastName}{" "}
                          </span>
                          <span>{elem.firstName} - </span>
                          <span>{elem.dob}</span>
                        </div>
                      );
                    })}
                </div>
              }
            </div>
          );
        })}
        {showDataIndicator.length === 0 ? (
          <div className="app__noData">No Employees</div>
        ) : null}
      </div>
    </>
  );
};

export default EmployeesBirthday;
