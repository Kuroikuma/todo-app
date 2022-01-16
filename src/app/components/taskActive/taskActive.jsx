import React, { useContext } from "react";
import taskContext from "../../context/TaskContext";
import { TaskHeader } from "../headerTask/headerTask";
import { BarAdd } from "../barAdd/barAdd";
import { TaskCard } from "../TaskCard/taskCard";
import "./taskActive.css";

export const TaskActive = () => {
  const { task } = useContext(taskContext);
  return (
    <div className="container">
      <TaskHeader select="active" />
      <BarAdd />
      <div className="containerActiveTackList">
        {task &&
          task.map((item) =>
            item.isCompleted ? null : (
              <TaskCard
                isCompleted={item.isCompleted}
                details={item.details}
                id={item.id}
                key={item.id}
              />
            )
          )}
      </div>
    </div>
  );
};
