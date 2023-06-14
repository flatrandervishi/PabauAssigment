import React from "react";

function SecondOpt(props) {
  return (
    <div className="secondOpt-container">
      <h3>Selected Title:</h3>
      <h1>{props.selectedTitle}</h1>
    </div>
  );
}

export default SecondOpt;
