import React from "react";
import "./HeaderStyles.css";

export const PageHeader = ({ headerText }) => {
  return (
    <div className="page-header">
      <h1>{headerText}</h1>
      <div className="horizontal-divider"></div>
    </div>
  );
};

export const SectionHeader = ({ headerText, centered, large}) => {
  
  return (
    <div className="section-header" style={centered ? {textAlign: "center"} : {}}>
      {large ? <h1>{headerText}</h1> : <h2>{headerText}</h2>}
    </div>
  );
};