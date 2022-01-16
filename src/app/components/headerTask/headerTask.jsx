import { NavLink } from "react-router-dom";
import "./headerTask.css";

export const TaskHeader = (props) => {
  const { select = "completed" } = props;
  return (
    <>
      <div className="containerHeader">
        <div className="containerHeaderTitle">
          <h1>#todo</h1>
        </div>

        <div className="containerHeaderBar">
          <div
            className={
              select === "all"
                ? "containerHeaderBar__item all"
                : "containerHeaderBar__item"
            }
          >
            <NavLink to="/all">All</NavLink>
          </div>
          <div
            className={
              select === "active"
                ? "containerHeaderBar__item active"
                : "containerHeaderBar__item"
            }
          >
            <NavLink to="/active">Active</NavLink>
          </div>
          <div
            className={
              select === "completed"
                ? "containerHeaderBar__item completed"
                : "containerHeaderBar__item"
            }
          >
            <NavLink to="/completed">Completed</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
