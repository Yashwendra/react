import React, { useState } from "react";

import Nav from "./Components/Header/Nav";

import DayWorkList from "./Components/DayActivity/DayWorkList/DayWorkList";
import WorkInputs from "./Components/DayActivity/WorkInput/WorkInputs";
import "./App.css";

const App = () => {
  const [DayWorks, setDayWorks] = useState([
    { text: "Add  all Completed  Task!", id: "g1" },
    { text: "Finish the Task!", id: "g2" },
  ]);

  const addWorkHandler = (enteredText) => {
    setDayWorks((prevWorks) => {
      const updatedWorks = [...prevWorks];
      updatedWorks.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedWorks;
    });
  };

  const deleteItemHandler = (workId) => {
    setDayWorks((prevWorks) => {
      const updatedWorks = prevWorks.filter((work) => work.id !== workId);
      return updatedWorks;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No Work's found. Maybe add one?</p>
  );

  if (DayWorks.length > 0) {
    content = <DayWorkList items={DayWorks} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <div>
      <Nav />
      <section id="work-form">
        <WorkInputs onAddWork={addWorkHandler} />
      </section>
      <section id="works">{content}</section>
    </div>
  );
};

export default App;
