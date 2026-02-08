import React from "react";

function SimpleCounter({ digitFour, digitThree, digitTwo, digitOne }) {
  return (
    <div className="bigCounter">
      <div className="calendar">
        <i className="far fa-clock" aria-hidden="true"></i>
        <span className="visually-hidden">clock</span>
      </div>

      <div className="four">{digitFour}</div>
      <div className="three">{digitThree}</div>
      <div className="two">{digitTwo}</div>
      <div className="one">{digitOne}</div>
    </div>
  );
}

export default SimpleCounter;
