import React from "react";
import "./PageHeaderStyles.css";

const PageHeader = ({ headerText }) => {
  return (
    <div className="page-header">
      <h1>{headerText}</h1>
      <div className="horizontal-divider"></div>
    </div>
  );
};

export default PageHeader;