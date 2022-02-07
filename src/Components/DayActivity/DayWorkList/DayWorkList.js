import React from "react";
import DayWorkItem from "../DayWorkItem/DayWorkItem";
import "./DayWorkList.css";

const DayWorkList = (props) => {
  return (
    <ul className="work-list">
      {props.items.map((work) => (
        <DayWorkItem key={work.id} id={work.id} onDelete={props.onDeleteItem}>
          {work.text}
        </DayWorkItem>
      ))}
    </ul>
  );
};

export default DayWorkList;
