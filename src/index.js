import React from "react";
import ReactDOM from "react-dom";
import { IndexRoutes } from "./app/router/index.routes";
import { TaskContextProvider } from "./app/context/TaskContext";

ReactDOM.render(
  <React.StrictMode>
    <TaskContextProvider>
      <IndexRoutes />
    </TaskContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
