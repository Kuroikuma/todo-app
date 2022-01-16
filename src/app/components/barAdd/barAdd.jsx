import "./barAdd.css";
import React, { useState, useContext } from "react";
import taskContext from "../../context/TaskContext";

export const BarAdd = () => {
  const [details, setDetails] = useState("");
  const { id, setId, setTask } = useContext(taskContext);

  const handleChange = (event) => {
    const { value } = event.target;
    setDetails(value);
  };
  const handleTask = () => {
    const newTask = {
      isCompleted: false,
      details: details,
      id: id,
    };
    setTask((prevTask) => [...prevTask, newTask]);
    setDetails("");
    setId(id + 1);
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
