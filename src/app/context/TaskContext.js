import React, { useState, useEffect } from "react";
const Context = React.createContext({});
export const TaskContextProvider = ({ children }) => {
  const [task, setTask] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    const taskData = JSON.parse(localStorage.getItem("task"));
    if (taskData) {
      setTask(taskData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  useEffect(() => {
    const idData = JSON.parse(localStorage.getItem("id"));
    if (idData) {
      setId(idData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("id", JSON.stringify(id));
  }, [id]);

  return (
    <Context.Provider value={{ task, setTask, id, setId }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
