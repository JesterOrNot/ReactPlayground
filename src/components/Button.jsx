import React from "react";

const Button = props => {
  return (
    <button
      title={props.tooltip}
      onClick={props.onClick}
      style={{
        color: "white",
        width: "53px",
        height: "23px"
      }}
      className={`CustomButton fa ${props.iconName}`}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
