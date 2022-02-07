import React from "react";
import "./DayWorkItem.css";

const DayWorkItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="work-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default DayWorkItem;
