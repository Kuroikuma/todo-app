import React, { useState, useEffect } from "react";
const Context = React.createContext({});
export const TaskContextProvider = ({ children }) => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const taskData = JSON.parse(localStorage.getItem("task"));
    if (taskData) {
      setTask(taskData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <Context.Provider value={{ task, setTask }}>{children}</Context.Provider>
  );
};

export default Context;
