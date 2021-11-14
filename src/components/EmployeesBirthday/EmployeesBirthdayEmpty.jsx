import React from "react";
import "./../../styles/styles.css";

const EmployeesBirthdayEmpty = ({ ListIsEmpty }) => {
  return (
    <>
      <div style={{ fontWeight: "bold" }}>{ListIsEmpty}</div>
    </>
  );
};

export default EmployeesBirthdayEmpty;
