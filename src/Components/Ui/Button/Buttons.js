import React from "react";
import "./Button.css";

const Buttons = (props) => {
  return (
    <button className="button" type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Buttons;
