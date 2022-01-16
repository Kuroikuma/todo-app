import React, { useContext } from "react";
import taskContext from "../../context/TaskContext";
import { TaskHeader } from "../headerTask/headerTask";
import deleteW from "../../../assets/deleteWhite.png";
import { TaskCard } from "../TaskCard/taskCard";
import "./taskCompleted.css";

export const TaskCompleted = () => {
  const { task, setTask } = useContext(taskContext);
  const deleteAllTask = () => {
    setTask(task.filter((item) => item.isCompleted !== true));
  };
  return (
    <div className="container">
      <TaskHeader select="completed" />
      <div className="containerCompletedTackList">
        {task &&
          task.map((item) =>
            item.isCompleted ? (
              <TaskCard
                showDelete={true}
                isCompleted={item.isCompleted}
                details={item.details}
                id={item.id}
                key={item.id}
              />
            ) : null
          )}
      </div>
      <div className="containerDeleteAll">
        <div className="containerDeleteAllButton" onClick={deleteAllTask}>
          <img src={deleteW} alt="deleteTask" />
          <p>Delete All</p>
        </div>
      </div>
    </div>
  );
};
