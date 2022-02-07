import React, { useState } from "react";
import Footer from "../../Footer/Footer";

import Buttons from "../../Ui/Button/Buttons";
import styles from "./WorkInput.module.css";

const WorkInputs = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const workInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddWork(enteredValue);
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
        >
          <label>Completed Task</label>
          <input type="text" onChange={workInputChangeHandler} />
        </div>
        <Buttons type="submit">Add Task</Buttons>
      </form>
      <Footer />
    </>
  );
};

export default WorkInputs;
