import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TaskHeader } from "../components/headerTask/headerTask";
import { TaskActive } from "../components/taskActive/taskActive";
import { TaskAll } from "../components/taskAll/taskAll";
import { TaskCompleted } from "../components/taskCompleted/taskCompleted";
export function IndexRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskAll />} />
        <Route path="/active" element={<TaskActive />} />
        <Route path="/completed" element={<TaskCompleted />} />
        <Route path="/all" element={<TaskAll />} />
        <Route index element={<TaskAll />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
