import React from "react";

const PieChart = (props) => {
  return (
    <div style={{}}>
      <div style={{ marginTop: 0, display: "flex" }}>
        <div style={{ width: "35%", paddingRight: 30 }}>{props.children}</div>
        <div style={{ width: "70%" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
