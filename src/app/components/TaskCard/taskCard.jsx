import "./taskCard.css";
import React, { useContext } from "react";
import check from "../../../assets/check.png";
import deleteT from "../../../assets/delete.png";
import taskContext from "../../context/TaskContext";

export const TaskCard = (props) => {
  const { isCompleted, details, id, showDelete = false } = props;
  const { task, setTask } = useContext(taskContext);

  const handleDeleteTask = () => {
    setTask(task.filter((item) => item.id !== id));
  };
  const handleCompletedTask = () => {
    setTask(task.filter((item) => item.id !== id));
    const newTask = { isCompleted: true, details, id };
    setTask((prevTask) => [...prevTask, newTask]);
  };
  return (
    <>
      <div className="containerTaskCard">
        {!isCompleted ? (
          <div className="containerTaskCardComplete">
            <div
              className="containerTaskCardCompleteCheck"
              onClick={handleCompletedTask}
            ></div>
            <div className="containerTaskCardCompleteDetails">
              <p>{details}</p>
            </div>
          </div>
        ) : (
          <div className="containerTaskCardCurrent">
            <div className="containerTaskCardCurrentLeft">
              <div className="containerTaskCardCurrentLeftCheck">
                <img src={check} alt="" />
              </div>
              <div className="containerTaskCardCurrentLeftDetails">
                <p>{details}</p>
              </div>
            </div>
            <div className="containerTaskCardCurrentRight">
              <div
                onClick={handleDeleteTask}
                className={
                  showDelete
                    ? "containerTaskCardCurrentRightDelete show"
                    : "containerTaskCardCurrentRightDelete"
                }
              >
                <img src={deleteT} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
