import "./barAdd.css";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useContext } from "react";
import taskContext from "../../context/TaskContext";

export const BarAdd = () => {
  const [details, setDetails] = useState("");
  const { setTask } = useContext(taskContext);

  const handleChange = (event) => {
    const { value } = event.target;
    setDetails(value);
  };
  const handleTask = () => {
    const newTask = {
      isCompleted: false,
      details: details,
      id: uuidv4(),
    };
    setTask((prevTask) => [...prevTask, newTask]);
    setDetails("");
  };
  return (
    <>
      <div className="containerBarAdd">
        <input
          value={details}
          onChange={handleChange}
          placeholder="add details"
          type="text"
        />
        <button onClick={handleTask}>Add</button>
      </div>
    </>
  );
};
