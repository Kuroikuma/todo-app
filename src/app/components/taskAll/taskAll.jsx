import React, { useContext } from "react";
import taskContext from "../../context/TaskContext";
import { TaskHeader } from "../headerTask/headerTask";
import { BarAdd } from "../barAdd/barAdd";
import { TaskCard } from "../TaskCard/taskCard";
import "./taskAll.css";

export const TaskAll = () => {
  const { task } = useContext(taskContext);
  return (
    <div className="container">
      <TaskHeader select="all" />
      <BarAdd />
      <div className="containerAllTackList">
        {task &&
          task.map((item) => (
            <TaskCard
              isCompleted={item.isCompleted}
              details={item.details}
              id={item.id}
              key={item.id}
            />
          ))}
      </div>
    </div>
  );
};
